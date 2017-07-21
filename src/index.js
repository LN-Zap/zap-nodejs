import http from 'http'
import express from 'express'
import cors from 'cors'
import morgan from 'morgan'
import bodyParser from 'body-parser'
import ws from 'ws'
import url from 'url'
import lightning from './lib/lightning'
import initializeDb from './db'
import middleware from './middleware'
import api from './api'
import config from './config'

const lnd = lightning(config.lightning, config.lightningHost)

let app = express()
app.server = http.createServer(app)

const wss = new ws.Server({ server: app.server })

// logger
app.use(morgan('dev'))

// 3rd party middleware
app.use(cors({
	exposedHeaders: config.corsHeaders
}))

app.use(bodyParser.json({
	limit : config.bodyLimit,
	extended : true
}))

// connect to db
initializeDb( db => {

	// internal middleware
	app.use(middleware())

	// api router
	app.use('/api', api({ lnd, wss }))

	wss.on('connection', (ws, req) => {
	  const location = url.parse(req.url, true)

	  console.log('location: ', location)
	  ws.on('message', message => { console.log('received: ', message) })
	})

	app.server.listen(process.env.PORT || config.port, () => {
		console.log(`Started on port ${app.server.address().port}`)
	})
})

export default app

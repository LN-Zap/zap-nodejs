import { version } from '../../package.json'
import { Router } from 'express'
import facets from './facets'

export default ({ config, db, lnd }) => {
	let api = Router()

	// mount the facets resource
	api.use('/facets', facets({ config, db }))

	// perhaps expose some API metadata at the root
	api.get('/', (req, res) => {
		res.json({ version })
	})

	api.get('/info', (req, res) => {
		lnd.getInfo({}, (err, data) => {
			if (err) {
				return res.sendStatus(500)
			}
			
			return res.json({ data })
		})
	})

	return api
}

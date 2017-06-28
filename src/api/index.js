import { version } from '../../package.json'
import { Router } from 'express'
import facets from './facets'
import {
	network,
	info,
	peers,
	channels,
	pending_channels,
	payments,
	invoices,
	wallet_balance,
	channel_balance
} from './lnd'

export default ({ config, db, lnd }) => {
	let api = Router()

	api.get('/network', network({ lnd }))
	api.get('/info', info({ lnd }))
	api.get('/peers', peers({ lnd }))
	api.get('/channels', channels({ lnd }))
	api.get('/pending_channels', pending_channels({ lnd }))
	api.get('/payments', payments({ lnd }))
	api.get('/invoices', invoices({ lnd }))
	api.get('/wallet_balance', wallet_balance({ lnd }))
	api.get('/channel_balance', channel_balance({ lnd }))

	// mount the facets resource
	// api.use('/facets', facets({ config, db }))

	// perhaps expose some API metadata at the root
	api.get('/', (req, res) => {
		res.json({ version })
	})

	return api
}

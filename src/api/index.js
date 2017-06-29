import { version } from '../../package.json'
import { Router } from 'express'
import {
	network,
	info,
	peers,
	channels,
	pending_channels,
	payments,
	invoices,
	wallet_balance,
	channel_balance,
	connect,
	disconnect
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
	
	api.post('/connect', connect({ lnd }))
	api.post('/disconnect', disconnect({ lnd }))

	// perhaps expose some API metadata at the root
	api.get('/', (req, res) => {
		res.json({ version })
	})

	return api
}

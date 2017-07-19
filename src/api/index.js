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
	disconnect,
	addinvoice,
	sendpayment,
	decodepayreq,
	queryroute,
	newaddress,
	verifymessage,
	invoice
} from './lnd'

export default ({ lnd }) => {
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
	api.get('/invoice/:rhash', invoice({ lnd }))
	
	api.post('/connect', connect({ lnd }))
	api.post('/disconnect', disconnect({ lnd }))
	api.post('/addinvoice', addinvoice({ lnd }))
	api.post('/sendpayment', sendpayment({ lnd }))
	api.post('/decodepayreq', decodepayreq({ lnd }))
	api.post('/queryroute', queryroute({ lnd }))
	api.post('/newaddress', newaddress({ lnd }))
	api.post('/verifymessage', verifymessage({ lnd }))

	api.get('/', (req, res) => {
		res.json({ version })
	})

	return api
}

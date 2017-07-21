import sockets from '../../sockets'

export default ({ lnd }) => (
	(req, res) => {
		console.log(req.body)
		const payload = { payment_request: req.body.payment_request }
		
		return lnd.sendPaymentSync(payload, (err, data) => {
			console.log('err: ', err)
			if (err) return res.status(500).send(err)
			console.log('data: ', data)

			console.log('clients: ', wss.clients)
			sockets.broadcast(wss.clients, data)
			return res.json({ data })
		})
	}
)
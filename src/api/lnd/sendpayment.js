import sockets from '../../sockets'

export default ({ lnd, wss }) => (
	(req, res) => {
		const payload = { payment_request: req.body.payment_request }
		return lnd.sendPaymentSync(payload, (err, data) => {
			if (err) return res.status(500).send(err)

			sockets.broadcast(wss.clients, data)

			return res.json({ data })
		})
	}
)
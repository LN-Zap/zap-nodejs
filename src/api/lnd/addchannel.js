// import sockets from '../../sockets'

export default ({ lnd, wss }) => (
	(req, res) => {
		// const payload = { payment_request: req.body.payment_request }
		console.log('body: ', req.body)
		return
		return lnd.openChannelSync(payload, (err, data) => {
			if (err) return res.status(500).send(err)


			return res.json({ data })
		})
	}
)
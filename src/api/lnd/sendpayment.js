export default ({ lnd }) => (
	(req, res) => {
		const payload = { payment_request: req.body.payreq }

		return lnd.sendPaymentSync(payload, (err, data) => {
			if (err) return res.status(500).send(err)
			
			return res.json({ data })
		})
	}
)
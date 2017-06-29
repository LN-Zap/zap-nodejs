export default ({ lnd }) => (
	(req, res) => {
		const payload = { payment_request: req.body.payreq }

		return lnd.sendPaymentSync(payload, (err, data) => {
			if (err) return res.sendStatus(500)
			
			return res.json({ data })
		})
	}
)
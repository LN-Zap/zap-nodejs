export default ({ lnd }) => (
	(req, res) => {
		const payload = { type: req.body.type }

		return lnd.newAddress(payload, (err, data) => {
			if (err) return res.sendStatus(500)
			
			return res.json({ data })
		})
	}
)
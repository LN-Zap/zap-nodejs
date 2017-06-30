export default ({ lnd }) => (
	(req, res) => {
		const payload = { type: req.body.type }

		return lnd.newAddress(payload, (err, data) => {
			if (err) return res.status(500).send(err)
			
			return res.json({ data })
		})
	}
)
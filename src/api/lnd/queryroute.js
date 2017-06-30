export default ({ lnd }) => (
	(req, res) => {
		const { pub_key, amt } = req.body
		const payload = { pub_key, amt }

		return lnd.queryRoutes(payload, (err, data) => {
			if (err) return res.status(500).send(err)
			
			return res.json({ data })
		})
	}
)
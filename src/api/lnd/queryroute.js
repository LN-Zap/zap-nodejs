export default ({ lnd }) => (
	(req, res) => {
		const { pub_key, amt } = req.body
		const payload = { pub_key, amt }

		return lnd.queryRoutes(payload, (err, data) => {
			if (err) return res.sendStatus(500)
			
			return res.json({ data })
		})
	}
)
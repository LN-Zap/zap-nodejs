export default ({ lnd }) => (
	(req, res) => (
		lnd.listChannels({}, (err, data) => {
			if (err) return res.sendStatus(500)
			
			return res.json({ data })
		})
	)
)
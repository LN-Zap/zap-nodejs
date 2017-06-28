export default ({ lnd }) => (
	(req, res) => (
		lnd.pendingChannels({}, (err, data) => {
			if (err) return res.sendStatus(500)
			
			return res.json({ data })
		})
	)
)
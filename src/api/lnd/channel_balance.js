export default ({ lnd }) => (
	(req, res) => (
		lnd.channelBalance({}, (err, data) => {
			if (err) return res.sendStatus(500)
			
			return res.json({ data })
		})
	)
)
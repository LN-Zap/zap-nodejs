export default ({ lnd }) => (
	(req, res) => (
		lnd.channelBalance({}, (err, data) => {
			if (err) return res.status(500).send(err)
			
			return res.json({ data })
		})
	)
)
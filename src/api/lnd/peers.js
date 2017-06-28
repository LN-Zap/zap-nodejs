export default ({ lnd }) => (
	(req, res) => (
		lnd.listPeers({}, (err, data) => {
			if (err) return res.sendStatus(500)
			
			return res.json({ data })
		})
	)
)
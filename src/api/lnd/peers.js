export default ({ lnd }) => (
	(req, res) => (
		lnd.listPeers({}, (err, data) => {
			if (err) return res.status(500).send(err)
			
			return res.json({ data })
		})
	)
)
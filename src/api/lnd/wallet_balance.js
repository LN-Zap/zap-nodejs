export default ({ lnd }) => (
	(req, res) => (
		lnd.walletBalance({}, (err, data) => {
			if (err) return res.status(500).send(err)
			
			return res.json({ data })
		})
	)
)
export default ({ lnd }) => (
	(req, res) => (
		lnd.walletBalance({}, (err, data) => {
			if (err) return res.sendStatus(500)
			
			return res.json({ data })
		})
	)
)
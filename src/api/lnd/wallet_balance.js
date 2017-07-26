export default ({ lnd }) => (
	(req, res) => (
		lnd.walletBalance({}, (err, data) => {
			console.log('err: ', err)
			if (err) return res.status(500).send(err)
			
			return res.json({ data })
		})
	)
)
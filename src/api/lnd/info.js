export default ({ lnd }) => (
	(req, res) => (
		lnd.getInfo({}, (err, data) => {
			console.log('ERR: ', err)
			if (err) return res.status(500).send(err)
			
			return res.json({ data })
		})
	)
)
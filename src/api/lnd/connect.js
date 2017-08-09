export default ({ lnd }) => (
	(req, res) => {
		const { pubkey, host } = req.body
		const payload = { addr: { pubkey, host }, perm: true }
		console.log('payload: ', payload)
		lnd.connectPeer(payload, (err, data) => {
			console.log('err: ', err)
			if (err) return res.status(500).send(err)
			
			return res.json({ data })
		})
	}
)
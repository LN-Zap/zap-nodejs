export default ({ lnd }) => (
	(req, res) => {
		const { pubkey, host } = req.body
		const payload = { addr: { pubkey, host }, perm: true }
		lnd.connectPeer(payload, (err, data) => {
			if (err) return res.status(500).send(err)
			
			return res.json({ data })
		})
	}
)
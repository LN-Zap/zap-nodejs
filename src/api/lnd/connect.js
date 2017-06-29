export default ({ lnd }) => (
	(req, res) => {
		const { pubkey, host } = req.body
		const payload = { addr: { pubkey, host }, perm: true }

		return lnd.connectPeer(payload, (err, data) => {
			if (err) return res.sendStatus(500)
			
			return res.json({ data })
		})
	}
)
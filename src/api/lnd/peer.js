export default ({ lnd }) => (
	(req, res) => {
		var { pubkey, host } = req.body
		var payload = { addr: { pubkey, host }, perm: true }

		return lnd.connectPeer(payload, (err, data) => {
			if (err) return res.sendStatus(500)
			
			return res.json({ data })
		})
	}
)
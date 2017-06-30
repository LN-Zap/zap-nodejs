export default ({ lnd }) => (
	(req, res) => {
		const payload = { pub_key: req.body.pubkey }

		return lnd.disconnectPeer(payload, (err, data) => {
			if (err) return res.status(500).send(err)
			
			return res.json({ data })
		})
	}
)
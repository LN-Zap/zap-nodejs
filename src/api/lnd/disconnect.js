export default ({ lnd }) => (
	(req, res) => {
		const payload = { pub_key: req.body.pubkey }

		console.log('payload: ', payload)

		return lnd.disconnectPeer(payload, (err, data) => {
			if (err) return res.sendStatus(500)
			
			return res.json({ data })
		})
	}
)
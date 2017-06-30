export default ({ lnd }) => (
	(req, res) => {
		const { msg, signature } = req.body
		const payload = { msg: Buffer.from(msg, "utf8"), signature }

		return lnd.verifyMessage(payload, (err, data) => {
			if (err) return res.status(500).send(err)
			
			return res.json({ data })
		})
	}
)
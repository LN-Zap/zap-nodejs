export default ({ lnd }) => (
	(req, res) => {
		const { msg, signature } = req.body
		const payload = { msg: Buffer.from(req.body.msg, "utf8"), signature }

		return lnd.verifyMessage(payload, (err, data) => {
			if (err) return res.sendStatus(500)
			
			return res.json({ data })
		})
	}
)
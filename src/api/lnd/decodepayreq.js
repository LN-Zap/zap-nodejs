export default ({ lnd }) => (
	(req, res) => {
		const payload = { pay_req: req.body.payreq }

		return lnd.decodePayReq(payload, (err, data) => {
			if (err) return res.status(500).send(err)
			
			return res.json({ data })
		})
	}
)
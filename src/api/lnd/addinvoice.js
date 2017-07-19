export default ({ lnd }) => (
	(req, res) => {
		const { memo, value } = req.body
		const payload = { memo, value }

		return lnd.addInvoice(payload, (err, data) => {
			if (err) return res.status(500).send(err)
			
			const result = Object.assign(data, { r_hash: new Buffer(data.r_hash,'hex').toString('hex') })
			return res.json({ data: result })
		})
	}
)
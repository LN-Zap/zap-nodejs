export default ({ lnd }) => (
	(req, res) => {
		const { memo, value } = req.body
		const payload = { memo, value }

		return lnd.addInvoice(payload, (err, data) => {
			if (err) return res.sendStatus(500)
			
			return res.json({ data })
		})
	}
)
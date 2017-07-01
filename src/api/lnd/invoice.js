export default ({ lnd }) => (
	(req, res) => (
		lnd.lookupInvoice({ r_hash_str: req.params.rhash }, (err, data) => {
			if (err) return res.status(500).send(err)
			
			return res.json({ data })
		})
	)
)
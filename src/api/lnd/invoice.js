import zbase32 from 'zbase32'

export default ({ lnd }) => (
	(req, res) => {
		const { payreq } = req.params
		const payreqBase32 = zbase32.decode(payreq)

		const bufferHexRotated = Buffer.from(payreqBase32).toString("hex")
		const bufferHex = bufferHexRotated.substr(bufferHexRotated.length - 1, bufferHexRotated.length)
				+ bufferHexRotated.substr(0, bufferHexRotated.length - 1)
		const buffer = Buffer.from(bufferHex, "hex")
		
		const pubKeyBuffer = buffer.slice(0, 33)
		const pubKeyHex = pubKeyBuffer.toString("hex")

		const paymentHashBuffer = buffer.slice(33, 65)
		const paymentHashHex = paymentHashBuffer.toString("hex")

		lnd.lookupInvoice({ r_hash_str: paymentHashHex }, (err, data) => {
			if (err) return res.status(500).send(err)
			
  		const result = Object.assign(data, { r_hash: new Buffer(data.r_hash,'hex').toString('hex') })
			return res.json({ data: result })
		})
	}
)

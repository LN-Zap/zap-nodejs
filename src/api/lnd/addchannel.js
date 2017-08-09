import channels from '../../push/channels'
import bitcore from 'bitcore-lib'
const BufferUtil = bitcore.util.buffer

export default ({ lnd, wss }) => (
	(req, res) => {
		const { pubkey, localamt, pushamt } = req.body
		const payload = { 
			node_pubkey: BufferUtil.hexToBuffer(pubkey),
			local_funding_amount: Number(localamt), 
			push_sat: Number(pushamt) 
		}

		channels(lnd, wss, payload, (err, data) => {
			console.log('data callback: ', data)
			console.log('err callback: ', err)
			if (err) { return res.status(500).send(err) }

			return res.json({ data })
		})
	}
)
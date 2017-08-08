import sockets from '../../sockets'
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

		try {
			const call = lnd.openChannel(payload)
			
			call.on('data', function (data) {
				console.log('data: ', data)
				sockets.broadcast(wss.clients, { event: 'data', data })
			})
			
			call.on('end', function () {
				console.log('end')
				sockets.broadcast(wss.clients, { event: 'end' })
			})
			
			call.on('error', function (err) {
				console.log('err: ', err)
				sockets.broadcast(wss.clients, { event: 'error', data })
			})
			
			call.on('status', function (status) {
				console.log('status: ', status)
				sockets.broadcast(wss.clients, { event: 'statu', data })
			})
			
			return { data: payload }
		} catch (err) {
			return res.status(500).send(err)
		}
	}
)
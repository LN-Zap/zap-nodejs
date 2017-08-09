import sockets from '../sockets'

const DATA = 'CHANNEL_DATA'
const END = 'CHANNEL_END'
const ERROR = 'CHANNEL_ERROR'
const STATUS = 'CHANNEL_STATUS'

export default function(lnd, wss, payload, callback) {
  try {
		const call = lnd.openChannel(payload)
		
		call.on('data', function (data) {
			console.log('data: ', data)
			sockets.broadcast(wss.clients, { event: DATA, data })
		})
		
		call.on('end', function () {
			console.log('end')
			sockets.broadcast(wss.clients, { event: END })
		})
		
		call.on('error', function (err) {
			console.log('err: ', err)
			sockets.broadcast(wss.clients, { event: ERROR, data: err })
		})
		
		call.on('status', function (status) {
			console.log('status: ', status)
			sockets.broadcast(wss.clients, { event: STATUS, data: status })
		})
		
		callback(null, payload)
	} catch (error) {
		callback(error, null)
	}
}
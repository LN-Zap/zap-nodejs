export default {
	port: 3000,
	bodyLimit: '100kb',
	corsHeaders: ['Link'],
	lightning: __dirname + '/config/rpc.proto',
	lightningHost: 'localhost:10009'
}


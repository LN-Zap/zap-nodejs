import ws from 'ws'

const broadcast = (clients, msg) => {
	const data = JSON.stringify(msg)

	clients.forEach(client => {
		if (!!client && client.readyState === ws.OPEN) {
			try {
        client.send(JSON.stringify(msg))
      } catch (err) {
        console.log('BROADCAST ERROR', err);
      }
		}
	})
}

export default {
	broadcast
}
import { createHash } from 'crypto'
import sockets from '../sockets'

export default function(lnd, wss) {
  const subscribeToInvoices = lnd.subscribeInvoices({})

  subscribeToInvoices.on('data', tx => {
    console.log('hey!')
    return sockets.broadcast(wss.clients, tx)
  })

  subscribeToInvoices.on('end', () => { console.log("SUB INV END") })

  subscribeToInvoices.on('status', (status) => {
    console.log('INV STATUS', status)
  })

  subscribeToInvoices.on('error', (err) => { console.log('INV ERROR', err) })
}
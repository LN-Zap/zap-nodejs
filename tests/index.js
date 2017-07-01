import request from 'supertest'
import { describe } from 'mocha'
import { expect } from 'chai'
import app from '../src'

describe('API tests', () => {
	it('should have return version number', (done) => {
    request(app)
      .get('/api')
      .end((err, res) => {
        expect(res.body.version).to.be.ok
        expect(res.statusCode).to.be.equal(200)
        done()
      })
  })

  it('should return node info', (done) => {
    request(app)
      .get('/api/info')
      .end((err, res) => {
        expect(res.body.data.identity_pubkey).to.be.ok
        expect(res.statusCode).to.be.equal(200)
        done()
      })
  })

  it('should return list of peers', (done) => {
    request(app)
      .get('/api/peers')
      .end((err, res) => {
        expect(res.body.data.peers).to.be.an('array')
        expect(res.statusCode).to.be.equal(200)
        done()
      })
  })

  it('should return list of channels', (done) => {
    request(app)
      .get('/api/channels')
      .end((err, res) => {
        expect(res.body.data.channels).to.be.an('array')
        expect(res.statusCode).to.be.equal(200)
        done()
      })
  })

  it('should return list of pending channels', (done) => {
    request(app)
      .get('/api/pending_channels')
      .end((err, res) => {
        expect(res.body.data).to.be.ok
        expect(res.statusCode).to.be.equal(200)
        done()
      })
  })

  it('should return list of payments', (done) => {
    request(app)
      .get('/api/payments')
      .end((err, res) => {
        expect(res.body.data.payments).to.be.an('array')
        expect(res.statusCode).to.be.equal(200)
        done()
      })
  })

  it('should return list of invoices', (done) => {
    request(app)
      .get('/api/invoices')
      .end((err, res) => {
        expect(res.body.data.invoices).to.be.an('array')
        expect(res.statusCode).to.be.equal(200)
        done()
      })
  })

  it('should return list of wallet balance', (done) => {
    request(app)
      .get('/api/wallet_balance')
      .end((err, res) => {
        expect(res.body.data.balance).to.be.ok
        expect(res.statusCode).to.be.equal(200)
        done()
      })
  })

  it('should return list of channel balance', (done) => {
    request(app)
      .get('/api/channel_balance')
      .end((err, res) => {
        expect(res.body.data.balance).to.be.ok
        expect(res.statusCode).to.be.equal(200)
        done()
      })
  })

  it('should return a specific invoice', (done) => {
    request(app)
      .get('/api/invoice/87690c44a99a1a6961b72dcd936550edbf160bc0aac73e3f43b9fb0dc1613e7b')
      .end((err, res) => {
        expect(res.body.data).to.be.ok
        expect(res.statusCode).to.be.equal(200)
        done()
      })
  })
})
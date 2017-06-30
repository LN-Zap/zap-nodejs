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
})
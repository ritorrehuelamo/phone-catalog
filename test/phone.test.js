const expect = require('expect')
const request = require('supertest')

const app = 'http://localhost:3000/'

describe('GET /phones', () => {
  it ('should get all phone list', done => {
    request(app)
      .get('phones')
      .expect(200)
      .expect(res => {
        expect(res.body.data.length).toBe(6)
      })
      .end(done)
  })

  it ('should get a phone by id', done => {
    request(app)
      .get('phones/1')
      .expect(200)
      .expect(res => {
        expect(res.body.data.length).toBe(1)
      })
      .end(done)
  })
})

describe('POST /phones', () => {
  it('should receive an order', () => {
    let order = {price: 200}

    request(app)
      .post('/phones')
      .send(order)
      .expect(200)
      .end((err, res) => {
        if (err) return done(err)
      })
  })
})
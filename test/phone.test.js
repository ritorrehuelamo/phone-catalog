const expect = require('expect')
const request = require('supertest')

const app = 'http://localhost:3000/'
let order = {
  name: 'john',
  surname: 'doe',
  email: 'john@doe.com',
  phones: [
     {
       name: 'Iphone X'
     }
  ]
}

let response = {
  data: {
      name: 'john',
      surname: 'doe',
      email: 'john@doe.com',
      price: {
          currency: 'EUR',
          total: 850
      }
  }
}
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
    request(app)
      .post('phones')
      .send(order)
      .expect(200)
      .end((err, res) => {
        if (err) return done(err)
        expect(res.body).toBe(response)
      })
  })
})
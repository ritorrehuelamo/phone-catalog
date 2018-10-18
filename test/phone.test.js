const expect = require('expect')
const request = require('supertest')

describe('GET /phones', () => {
  it ('should get all phone list', done => {
    request('http://localhost:3000/')
      .get('phones')
      .expect(200)
      .expect(res => {
        expect(res.body.data.length).toBe(6)
      })
      .end(done)
  })

  it ('should get a phone by id', done => {
    request('http://localhost:3000/')
      .get('phones/1')
      .expect(200)
      .expect(res => {
        expect(res.body.data.length).toBe(1)
      })
      .end(done)
  })
})
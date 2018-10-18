const httpError = require('http-errors')
const phoneList = require('../../data/phones')
const debug = require('debug')('phone-app:phone-controller')


const getAllPhones = (req, res) => {
  debug(`getAllPhones: ${req.originalUrl}`)
  res.json({
    data: phoneList
  })
}

const getPhoneById = (req, res) => {
  debug(`getAllPhones: ${req.originalUrl}`)
  const id = req.params.id
  const phoneById = phoneList.filter(e => e.id === id)
  if (phoneById.length > 0) {
    res.json({data: phoneById})
  } else {
    res.json(httpError(404, 'Not Found'))
  }
}

module.exports = {
  getAllPhones,
  getPhoneById
}
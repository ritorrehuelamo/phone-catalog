const httpError = require('http-errors')
const phoneList = require('../../data/phones')
const debug = require('debug')('phone-app:phone-controller')
const utils = require('../../middleware/utils')


const getAllPhones = (req, res) => {
  const resPhones = phoneList.map(e => {
    return {name: e.name, img: e.baseImg, description: e.specs, price: parseFloat(e.price).toFixed(2)}
  })
  res.json({
    data: resPhones
  })
}

const getPhoneById = (req, res) => {
  const id = req.params.id
  const phoneById = phoneList.filter(e => e.id === id)
  if (phoneById.length > 0) {
    res.json({data: phoneById})
  } else {
    res.json(httpError(404, 'Not Found'))
  }
}

const createOrder = (req, res) => {
  const {name, surname, email, phones} = req.body
  let totalPrice = utils.getTotalPrizeOfPhoneList(phones)
  res.status(200).json({data: {name, surname, email, price: totalPrice}})
}

module.exports = {
  getAllPhones,
  getPhoneById,
  createOrder
}
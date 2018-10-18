const data = require('../data/phones')

const getTotalPrizeOfPhoneList = phones => {
  let phoneList = getPhoneByName(data, phones)
  let price = 0
  let totalPrice = phoneList.map(e => price += parseFloat(e[0].price))
  return totalPrice[totalPrice.length - 1]
}

const getPhoneByName = (dataPhoneList, phoneList) => {
  let phoneArray = []
  phoneList.forEach(element => {
    phoneArray.push(dataPhoneList.filter(function (phone){ return phone.name === element.name}))
  })

  return phoneArray
}

module.exports = {
  getTotalPrizeOfPhoneList
}
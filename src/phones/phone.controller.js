

const getAllPhones = (req, res) => {
  res.json({
    message: 'Works!'
  })
}

const getPhoneById = (req, res) => {
  res.json({
    message: 'Phone id',
    id: req.params.id
  })
}

module.exports = {
  getAllPhones,
  getPhoneById
}
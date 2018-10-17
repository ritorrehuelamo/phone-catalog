const router = require('express').Router()
const phoneComponent = require('./phones/')

router.use('/phones', phoneComponent)

router.get('', (req, res) => {
  res.json({
    status: 'API Online',
    message: 'Phone catalog API'
  })
})

module.exports = router
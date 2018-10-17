const router = require('express').Router()
const phoneComponent = require('./phone.controller')

router.get('/', phoneComponent.getAllPhones)
router.get('/:id', phoneComponent.getPhoneById)


module.exports = router
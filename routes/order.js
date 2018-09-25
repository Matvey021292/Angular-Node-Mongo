const express = require('express')
const controller = require('../controllers/order')
const router = express.Router()

router.get('/getAll', controller.getAll)
router.post('/create', controller.create)

module.exports = router
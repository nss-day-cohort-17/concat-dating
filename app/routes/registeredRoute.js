'use strict'

const { Router } = require('express')
const router = Router()

const { show } = require('../controllers/registeredCtrl.js')

router.get('/registered', show)

module.exports = router

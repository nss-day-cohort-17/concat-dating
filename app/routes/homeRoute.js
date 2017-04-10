'use strict'

const { Router } = require('express')
const router = Router()

const { show } = require('../controllers/homeCtrl.js')

router.get('/home', show)

module.exports = router

'use strict'

const { Router } = require('express')
const router = Router()

const { show } = require('../controllers/createCtrl.js')

router.get('/create', show)

module.exports = router

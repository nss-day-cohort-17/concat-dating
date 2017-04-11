'use strict'

const { Router } = require('express')
const router = Router()

const { show } = require('../controllers/welcomeCtrl.js')

router.get('/', show)

module.exports = router

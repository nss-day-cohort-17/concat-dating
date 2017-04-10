'use strict'

const { Router } = require('express')
const router = Router()

const { show } = require('../controllers/likedCtrl.js')

router.get('/liked', show)

module.exports = router

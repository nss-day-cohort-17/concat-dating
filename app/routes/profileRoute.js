'use strict'

const { Router } = require('express')
const router = Router()

const { show } = require('../controllers/profileCtrl.js')

router.get('/profile/:username', show)

module.exports = router

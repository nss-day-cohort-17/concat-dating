'use strict'

const { Router } = require('express')
const router = Router()

const { show, createUser } = require('../controllers/createCtrl.js')

router.get('/create', show)
router.post('/create', createUser)

module.exports = router

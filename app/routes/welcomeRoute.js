'use strict'

const { Router } = require('express')
const router = Router()

const { show, destroy } = require('../controllers/welcomeCtrl.js')

router.get('/', show)
router.post('/', destroy)
module.exports = router

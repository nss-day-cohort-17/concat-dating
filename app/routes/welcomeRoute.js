'use strict'

const { Router } = require('express')

const { show, create } = require('../controllers/welcomeCtrl.js')

const router = Router()

router.get('/', show)
// router.get('/', edit)
router.post('/', create)
// router.post('/', destroy)

module.exports = router

'use strict'

const { Router } = require('express')
const router = Router()

// ______routes______
router.use(require('./welcomeRoute'))
router.use(require('./createRoute'))
router.use(require('./homeRoute'))
router.use(require('./likedRoute'))



module.exports = router

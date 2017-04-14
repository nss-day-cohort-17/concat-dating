'use strict'

const { Router } = require('express')

const { destroy, edit } = require('../controllers/welcomeCtrl.js')

const router = Router()

// router.get('/', edit)
router.post('/logout', destroy)

module.exports = router

//from the pug file, our original logout button in the navbar
// form(method='POST')
//   button(formaction="/") Logout

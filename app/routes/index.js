'use strict'

const { Router } = require('express')
const router = Router()

// ______routes______
router.use(require('./welcomeRoute'))
router.use(require('./createRoute'))

router.use( (req, res, next) => { // this is the gate that stops unregistered/loggedout people from viewing the pages
  if (req.isAuthenticated()) {
    next();
  } else {
    res.redirect('/')
  }
})

router.use(require('./registeredRoute'))
router.use(require('./homeRoute'))
router.use(require('./likedRoute'))
router.use(require('./profileRoute'))
router.use(require('./logoutRoute'))



module.exports = router

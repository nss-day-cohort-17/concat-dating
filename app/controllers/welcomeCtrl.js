'use strict'

const passport = require('passport')
module.exports.show = (req, res) => {
    res.render("welcome", {page: "Welcome"})
}

module.exports.create = (req, res, next) =>
  passport.authenticate('local', (err, user, msg) => {
    if(err) return next(err)
    if (!user) return res.render('welcome', {page: 'Welcome', msg})

    req.login(user, (err) => {
      if (err) return next(err)
      res.redirect('/')
    })
  })(req, res, next)

  module.exports.destroy =(req, res) => {
    req.logout()
    res.redirect('/')
  }

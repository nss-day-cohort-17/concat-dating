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
      req.session.save( ()=> {
        res.redirect('/home')
      })
      console.log("current user: logged in")
    })
  })(req, res, next)

module.exports.edit = (req, res) => res.render('welcome', {page: 'Welcome'})

module.exports.destroy =(req, res) => {
  console.log("current user: THERE IS NONE!!!!")
  req.logout()
  res.redirect('/')

}

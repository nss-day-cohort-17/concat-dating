'use strict'

const User = require('../models/userModel')

module.exports.show = (req, res) => {
  res.render("createUser", {page: "Create"})
}

module.exports.createUser = (req, res) => {
  User.forge()
    .save()
    .then( (newUser) => {
      console.log("newUser:", newUser)
    })
    .then( () => res.redirect('/home'))
}

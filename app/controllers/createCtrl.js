'use strict'

const User = require('../models/userModel')

module.exports.show = (req, res) => {
  res.render("createUser", {page: "Create"})
}

module.exports.createUser = ({body: {username, password, picUrl, likes, dislikes}}, res) => {
  return User.forge({username, password, picUrl, likes, dislikes})
    .save()
    .then( (newUser) => {
      console.log("newUser:", newUser)
    })
    .catch((err) => console.log(`Couldn't save new user`, err))
    .then( () => res.redirect('/home'))
}

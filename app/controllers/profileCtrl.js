'use strict'

const User = require('../models/userModel')

module.exports.show = (req, res) => {
  User.forge() // first, retrieve ALL users, then filter over them using the username
  .fetchAll()
  .then((data) => {
    let users = data.toJSON()
    let match = users.filter((x) => x.username === req.params.username ? true : false)
    return match
  })
  .then((selectedUser) => {
    res.render("profile", {page: "profile", selectedUser})
  })
}

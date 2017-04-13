'use strict'

const User = require('../models/userModel')

//finds all users and turns them into JSON
module.exports.show = (req, res) => {
    User.forge()
    .fetchAll()
    .then( function(data) {
      let users = data.toJSON()
      console.log("all the Users in the db:", users)
      res.render("home", {page: "Home", users})
    })
    .catch((err) => console.log("Could not find users:", err))
}

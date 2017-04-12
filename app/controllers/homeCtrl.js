'use strict'

const User = require('../models/userModel')

module.exports.show = (req, res) => {
    // User.forge()
    // .fetch('*')
    // .then( (data) => {
    //   console.log("allUsers:", data)
    // })
    res.render("home", {page: "Home"})
}

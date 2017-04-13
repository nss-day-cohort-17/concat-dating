'use strict'

const User = require('../models/userModel')

module.exports.show = (req, res) => {
  res.render('createUser', {page: 'Create'})
}

module.exports.createUser = ({body}, res) => {
  if (body.password === body.confirmPassword) {
    User.findOneByUsername(body.username)//this takes the input username and compares it to the usernames in the database
    // the returned data "user" will be the same username if it exists in the database or a null value if it has yet to be made
    .then( (user) => { //if the username already exists the following "if" statement will fire and stop a duplicate from being made
      if (user) return res.render('createUser', {msg: 'Username already used, please try another one'})
      //if the username has not been used yet the form information will be passed into this next line
      // in order to make a new user
      // console.log("body: ", username)
      let {username, password, picUrl, likes, dislikes} = body
      // console.log("info ", info)
      return User.forge({username, password, picUrl, likes, dislikes})
      .save()
      .then( ()=> {
        console.log("bacon")
        res.redirect('/registered')
      })

      //the following is a catch for the save
      .catch( (err)=> res.render('createUser', {msg: err}))
    })
    //the following is a catch for the findOneByUsername
    .catch( (err)=> res.render('createUser', {msg: 'Sorry, we could not tell if this username had been taken or not.  Please try again'}))
  } else {
    res.render('createUser', {msg: "password and confirm password don't match, try again"})
  }
}

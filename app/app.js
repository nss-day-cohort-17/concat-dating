'use strict'

require('dotenv').config()
const express = require('express')
const app = express()
const bodyParser = require('body-parser') // adds POST values to req.body object
const session = require("express-session")
const passport = require("passport")
const KnexSessionStore = require("connect-session-knex")(session)
const {knex} = require("./db/database")

const routes = require('./routes/')

const path = require('path')

// pug configuration
app.set('view engine', 'pug')

app.set('views', './app/views')

// app.use(session({cookie: {maxAge: 50000}, secret: "catnap", resave: true, saveUninitialized: false}))
app.use(bodyParser.urlencoded({extended: false}))
app.use(session({
  store: new KnexSessionStore({
    knex,
    tabename: 'sessions'
  }),
  resave: false,
  saveUninitialized: false,
  secret: process.env.SESSION_SECRET || 'capnapsecretkey'
}))
//above is needed to create the "session" that will let us keep a user logged in

require('./lib/passport-strategies')
app.use(passport.initialize())
app.use(passport.session())//this line in particular is what lets our user persist

app.use( (req, res, next) => {
  app.local.email = req.user && req.user.email
  next()
})

app.use(express.static(path.join(__dirname + '/public')))
app.use(routes)

app.use((req, res) => {
    res.render('404')
})

// listening
const port = process.env.PORT || 3000
app.listen(port, () => {
  console.log(`Listening on port ${port}`)
})

'use strict'

require('dotenv').config()
const express = require('express')
const app = express()

const routes = require('./routes/')

// pug configuration
app.set('view engine', 'pug')


app.use(express.static('public'))
app.use(routes)




app.get('/create', (req, res, next) => {
  res.send('<h1>Enter your personal info here</h1>')
})

app.get('/home', (req, res, next) => {
  res.send('<h1>Home Page</h1>')
})

app.get('/liked', (req, res, next) => {
  res.send('<h1>All the cats I like</h1>')
})


// listening
const port = process.env.PORT || 3000
app.listen(port, () => {
  console.log(`Listening on port ${port}`)
})

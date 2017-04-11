'use strict'

require('dotenv').config()
const express = require('express')
const app = express()

const routes = require('./routes/')

const path = require('path')

// pug configuration
app.set('view engine', 'pug')

app.set('views', './app/views')

app.use(express.static(path.join(__dirname + '/public')))
app.use(routes)


// listening
const port = process.env.PORT || 3000
app.listen(port, () => {
  console.log(`Listening on port ${port}`)
})

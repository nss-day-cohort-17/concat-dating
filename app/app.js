'use strict'

require('dotenv').config()
const express = require('express')
const app = express()

const routes = require('./routes/')

// pug configuration
app.set('view engine', 'pug')


app.use(express.static('public'))
app.use(routes)


// listening
const port = process.env.PORT || 3000
app.listen(port, () => {
  console.log(`Listening on port ${port}`)
})

'use strict'

require('dotenv').config()
const express = require('express')
const app = express()
const bodyParser = require('body-parser') // adds POST values to req.body object

const routes = require('./routes/')

const path = require('path')

// pug configuration
app.set('view engine', 'pug')

app.set('views', './app/views')

app.use(bodyParser.urlencoded({extended: false}))
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

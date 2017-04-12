'use strict'

console.log(`database file running`)

const config = require('../../knexfile')['development']
const knex = require('knex')(config)  // passing the config variable to knex function
const bookshelf = require('bookshelf')(knex)  // passing the knex variable to bookshelf function

console.log("bookshelf:", bookshelf)

module.exports = { knex, bookshelf }

'use strict'

const env = process.env.NODE_ENV || 'development';

const config = require('../../knexfile')[env]
const knex = require('knex')(config)  // passing the config variable to knex function
const bookshelf = require('bookshelf')(knex)  // passing the knex variable to bookshelf function

console.log("bookshelf require successful")

bookshelf.plugin('registry');  // helps to avoid circular dependency

module.exports = { knex, bookshelf }

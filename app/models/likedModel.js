'use strict'

const {bookshelf} = require('../db/database')

const Liked = bookshelf.Model.extend({
    tableName: 'likes'
})

module.exports = Liked
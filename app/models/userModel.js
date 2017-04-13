'use strict'

const { bookshelf } = require('../db/database.js')

const User = bookshelf.Model.extend(
  {
    tableName: 'users'  // defines the model relationship
    // hasTimestamps: true
  }
  // {
  //   // optional methods
  // }
)

module.exports = User

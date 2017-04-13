'use strict'

const { bookshelf } = require('../db/database')
const { compare } = require('bcryptjs')

const User = bookshelf.Model.extend({
    tableName: 'users',  // defines the model relationship
    bcrypt: {field; 'password'}, //tells the program to hash the input password
    comparePassword: function (passwordString) {
      //for the following return line "this.attributes" is the user information that has been
      // pulled from the database, so the "this.attributes.password" is the password
      // that was saved on the database for the user in question.  So with this line we
      // are comparing the input password "passwordString" with the one from the database
      // to make sure that it is the right user trying to login
      return compare(passwordString, this.attributes.password)
    }
  }, {
    findOneByUsername: function (username) {
      return this.forge({username})//
      .fetch()
      .then( (user) => {
        return user;
      })
      .catch( ()=> {
        return(null)
      });
    }
  });

module.exports = User

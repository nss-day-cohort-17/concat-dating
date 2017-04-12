"use strict";

const { knex } = require("../database");
const users = require("./users");

const usersPromises = users.map( ({username, password, picUrl, likes, dislikes}) => {
  return knex("users").insert({username, password, picUrl, likes, dislikes});
});

exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then( ()=> {
      // Inserts seed entries
      return Promise.all(usersPromises);
    });
};

'use strict'

const Liked = require('../models/likedModel')
const User = require('../models/userModel')

let currentUserId = 1

module.exports.show = (req, res) => {
    Liked.forge()
    .fetchAll()
    .then((data) => {
      data = data.toJSON()
      let likesArray = extractLiked(filterLikes(data))
      return likesArray
    })
    .then((likesArray) => {
      // console.log("just the filtered likes:", likesArray)
      res.render('liked', {page: 'Liked', likesArray}) // render likes page and pass in the array of liked users
    })
    .catch((err) => console.log("Could not generate likes:", err))

}

const extractLiked = (array) => {
  return User.forge() // first, retrieve ALL users, then filter over them using the array of liked_id numbers
  .fetchAll()
  .then((data) => {
    let users = data.toJSON()
    let filteredUsers = users.filter((x) => array.includes(x.id) ? true : false)
    return filteredUsers
  })
}

const filterLikes = (array) => { // function to get just the ids of the users liked by current user
  let newArray = array.filter((x) => x.liker_id === currentUserId ? true : false).map((y) => y.liked_id)
  return newArray // this is an array of numbers (liked_id)
}

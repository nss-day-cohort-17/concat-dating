'use strict'

const Liked = require('../models/likedModel')

module.exports.show = (req, res) => {
    res.render('liked', {page: 'Liked'})
}
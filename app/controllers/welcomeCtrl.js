'use strict'

module.exports.show = (req, res) => {
    res.render("welcome", {page: "Welcome"})
}
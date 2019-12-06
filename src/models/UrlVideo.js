const mongoose = require('../database')

const UrlVideoSchema = mongoose.Schema({
  url: String
})

const UrlVideo = mongoose.model('video', UrlVideoSchema)

module.exports = UrlVideo
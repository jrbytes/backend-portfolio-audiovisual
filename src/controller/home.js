var express = require('express')
var router = express.Router()

var UrlVideo = require('../models/UrlVideo')

router.get('/', async (req, res) => {
  try {
    const urlvideos = await UrlVideo.find()

    return res.send({ urlvideos })
  } catch (error) {
    return res.status(400).send({ error: 'Error loading url from videos'})
  }
})

router.get('/sobre', function(req, res) {
  res.send('API, exemplo de videoaula')
})

module.exports = router
var express = require('express')
var router = express.Router()

var birds = require('./Controller/birds')
var home = require('./Controller/home')

const dateFromTimestamp = require('date-from-timestamp')

router.use(function timeLog(req, res, next) {
  console.log('Time: ', dateFromTimestamp(Date.now()),
  'Model: ', req.originalUrl)
  next()
})

router.use('/', home)
router.use('/birds', birds)
router.use(express.static('src/assets'))

module.exports = router
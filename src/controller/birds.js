var express = require('express')
var router = express.Router()

router.get('/', function(req, res) {
  res.send('Classe birds')
})

router.get('/sobre', function(req, res) {
  res.send('Classe birds em sobre')
})

module.exports = router
var express = require('express')
var app = express()

const bodyParser = require('body-parser')
const cors = require('cors')

var router = require('./router')

app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

app.use('/', router)

app.listen(process.env.PORT || 3000)
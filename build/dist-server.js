require('shelljs/global')
var path = require('path')
var express = require('express')

var app = express()

app.use(express.static(path.join(__dirname, '../dist')))

app.listen('3111', function () {
  console.log('http://localhost:3111')
  exec('open http://localhost:3111')
})
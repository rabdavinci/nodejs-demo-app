const http = require('http');
const port = process.env.PORT || 8080;

var express = require('express');
var app = express();
app.get('/', function (req, res) {
  res.send('Hello World!');
});
app.listen(8080, function () {
  console.log('Example "Hello World"ddd app!    1111');
});

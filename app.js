var express = require('express');
var path = require('path');
var logger = require('morgan');

var app = express();

// view engine setup

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'dist')));
app.listen(3001, () => {
  console.log('listening port 3001.')
})

module.exports = app;

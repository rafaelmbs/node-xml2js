'use strict';

var http = require('http');
var api = require('./src/config/api');
var express = require('express');
var bodyParser = require('body-parser');
var port = process.env.port || api.port

var aero = require('./routes/weather-route');

var app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/weather', aero);

let server = module.exports = app;

server.listen(port, function() {
    console.log('Server listening at http://localhost:' + port);
});
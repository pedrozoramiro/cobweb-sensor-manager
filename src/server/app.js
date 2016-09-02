'use strict';

var express = require('express');
var app = express();

var bodyParser = require('body-parser');
var compress = require('compression');
var cors = require('cors');
var favicon = require('serve-favicon');
var logger = require('morgan');
var port = process.env.PORT || 3001;
var iniliazeRoutes = require('./routes-config');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(compress());
app.use(logger('dev'));
app.use(favicon(__dirname + '/favicon.ico'));
app.use(cors());

iniliazeRoutes(app);

console.log('PORT=' + port);
console.log('NODE_ENV=' + process.env.NODE_ENV);

app.use('/', express.static('./src/client/'));
app.use('/', express.static('./'));

app.listen(port, logInitial);


function logInitial() {
    console.log('************************');
    console.log('Listening on port ' + port);
    console.log('env = ' + app.get('env') +
        '\n__dirname = ' + __dirname +
        '\nprocess.cwd() = ' + process.cwd());
}
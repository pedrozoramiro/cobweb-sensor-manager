'use strict';

var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var compress = require('compression');
var cors = require('cors');
var errorHandler = require('./routes/utils/errorHandler')();
var favicon = require('serve-favicon');
var logger = require('morgan');
var port = process.env.PORT || 3001;
var routes;

var environment = process.env.NODE_ENV;
var oneDay = 86400000;
var pkg = require('./../../package.json');

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(compress());            
app.use(logger('dev'));         
app.use(favicon(__dirname + '/favicon.ico'));
app.use(cors());                
app.use(errorHandler.init);

routes = require('./routes/routes-config')(app);
console.log('PORT=' + port);
console.log('NODE_ENV=' + environment);

var source = '';


switch (environment) {
    case 'stage':
        console.log('** STAGE **');
        app.use('/', express.static('./build/stage/'));
        break;
    default:
        console.log('** DEV **');
        app.use('/', express.static(pkg.paths.client, {maxAge: oneDay}));
        app.use('/', express.static('./'));
        break;
}

app.listen(port, function() {
    console.log('************************');
    console.log('Listening on port ' + port);
    console.log('************************\n');
    console.log('env = ' + app.get('env') +
        '\nport = ' + port +
        '\n__dirname = ' + __dirname +
        '\nprocess.cwd() = ' + process.cwd());
});

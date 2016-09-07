module.exports = function(app) {
    var express = require('express');
    var api = express.Router();
    var db = require('./data/database')();
    var authentication = require('./auth/authentication')();

    require('./box/box-routes.js')(api, db);
    require('./product/routes-product.js')(api, db);
    require('./user/routes-user.js')(api, db);
    app.use('/api', authentication.expressJwtConfigureable());
    app.use('/api', api);
}
"use strict";

module.exports = function(app, db) {
    var collections = db.collections;
    var userService = require('./service-user.js');
    var authentication = require('../auth/authentication.js')();

    app.post('/user/signin', function(req, res) {
        var user = req.body;

        var userInfo = userService.signin(user.userName, user.password);
        if (!userInfo) {
            res.status(401).send('Invalid Password')
            return;
        }
        res.status(200).json({ token: authentication.generateToken(req, userInfo) });
    });
};
"use strict";

var db = require('../data/database')();
var _ = require('underscore');

module.exports = (function() {

    return {
        signin: signin
    };

    function signin(userName, password) {
        var users = _.findWhere(db.collections.users, { 'name': userName, 'password': password });
        if (_.isEmpty(users))
            return false;

        return users;
    }
})();
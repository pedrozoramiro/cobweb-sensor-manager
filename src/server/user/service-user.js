"use strict";

var db = require('../data/database')();
var _ = require('underscore');

module.exports = (function() {

    return {
        signin: signin
    };

    function signin(userName, password) {
        console.log(userName + password);
        return _.findWhere(db.collections.users, { 'name': userName, 'password': password });
    }
})();
module.exports = (function() {
    var expressJwt = require('express-jwt');
    var jwt = require('jsonwebtoken');

    var serviceAuthenticator = {
        expressJwtConfigureable: expressJwtConfigureable
    };

    return serviceAuthenticator;

    function expressJwtConfigureable() {
        return expressJwt({ secret: 'SECRETE HAHAHAH' }).unless({path:['/#/sensors']});
    }

});
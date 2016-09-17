module.exports = (function() {
    var expressJwt = require('express-jwt');
    var jwt = require('jsonwebtoken');
    var secret = 'SECRETE HAHAHAH'; //passar para radom 

    var serviceAuthenticator = {
        expressJwtConfigureable: expressJwtConfigureable,
        verifyToken: verifyToken,
        generateToken: generateToken
    };

    return serviceAuthenticator;

    function expressJwtConfigureable() {
        return expressJwt({ secret: secret }).unless({ path: ['/api/user/signin'] });
    }

    function generateToken(req, user) {
        user = user || {};

        if (user.password)
            delete user.password;

        var token = jwt.sign({
            user: user,
            auth: generateGUID(),
            agent: req.headers['user-agent'],
            exp: expiresTokenDefault()
        }, secret);

        return token;
    }

    function verifyToken(token) {
        var decoded = false;
        try {
            decoded = jwt.verify(token, secret);
        } catch (e) {
            decoded = false;
        }
        return decoded;
    }

    function expiresTokenDefault() {
        return Math.floor(new Date().getTime() / 1000) + 60 * 60;
    }

    function generateGUID() {
        return new Date().getTime(); // we can do better with crypto
    }
});
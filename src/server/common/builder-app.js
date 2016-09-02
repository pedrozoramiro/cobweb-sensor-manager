module.exports = (function() {

    var appBuilderService = {
        configureRoutes: configureRoutes,
        configureAuthentication: configureAuthentication
    };

    return appBuilderService;

    function configureRoutes(app, configuratorRoutes) {
        var db = require('../data/database')();
        configuratorRoutes(app, db);
    }

    function configureAuthentication(app) {}
});
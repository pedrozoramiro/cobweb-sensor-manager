(function() {
    'use strict';
    angular.module('app', ['ngRoute', 'ngCookies', 'app.widgets', 'app.config', 'app.data', 'app.login', 'app.sensor']);

    angular.module('app').config(['$routeProvider', configureRoutes]);

    function configureRoutes($routeProvider) {
        $routeProvider.otherwise({ redirectTo: '/login' });
    }
})();
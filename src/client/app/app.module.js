(function () {
    'use strict';
    angular.module('app', ['ngRoute','app.widgets','app.config','app.data','app.login','app.warning']);
    
    angular.module('app').config(['$routeProvider',configureRoutes]);

    function configureRoutes($routeProvider){
       $routeProvider.otherwise({redirectTo: '/login'});
    }
})();
(function () {
    'use strict';
    angular.module('app', ['ngRoute','app.login','app.warning']);
    
    angular.module('app').config(['$routeProvider',configureRoutes]);

    function configureRoutes($routeProvider){
       $routeProvider.otherwise({redirectTo: '/login'});
    }
})();
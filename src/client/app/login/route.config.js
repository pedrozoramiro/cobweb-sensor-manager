(function () {
    'use strict';
   angular.module('app.login').config(['$routeProvider',configureRoutes]);

   function configureRoutes($routeProvider){
        $routeProvider
            .when('/login', {
                    controllerAs: 'vm',
                    controller: 'LoginCrt',
                    templateUrl: 'app/login/login.html'
            });
    }
   
})();
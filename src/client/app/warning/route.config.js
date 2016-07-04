(function () {
    'use strict';
    angular.module('app').config(['$routeProvider',function($routeProvider){
       $routeProvider
            .when('/warning', {
                    controllerAs: 'vm',
                    controller: 'Warning',
                    templateUrl: 'app/warning/warning.html'
            })
            .otherwise({redirectTo: '/warning'});
    }]);
})();
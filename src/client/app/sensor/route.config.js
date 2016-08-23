(function() {
    'use strict';
    angular.module('app').config(['$routeProvider', function($routeProvider) {
        $routeProvider
            .when('/sensor', {
                controllerAs: 'vm',
                controller: 'Sensor',
                templateUrl: 'app/sensor/sensor.html'
            }).when('/sensor/:boxId/:sensorId/detail', {
                controllerAs: 'vm',
                controller: 'sensorDetail',
                templateUrl: 'app/sensor/sensorDetail.html'
            });
    }]);
})();
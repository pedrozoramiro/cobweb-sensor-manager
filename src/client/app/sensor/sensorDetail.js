(function() {
    'use strict';

    angular
        .module('app.sensor')
        .controller('sensorDetail', sensorDetail)

    sensorDetail.$inject = ['$routeParams', 'datacontext'];

    function sensorDetail($routeParams, dataContext) {
        var vm = this;
        vm.title = "TESTE";
        vm.sensor = {};
        vm.sensor.boxId = $routeParams.boxId;
        vm.sensor.sensorId = $routeParams.sensorId;
        dataContext.boxes.getSensor(vm.sensor.boxId, vm.sensor.sensorId)
            .then(function(sensor) {
                vm.sensor = sensor;
            });
    }

}());
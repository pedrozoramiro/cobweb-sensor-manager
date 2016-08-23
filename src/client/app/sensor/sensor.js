(function() {
    'use strict';

    angular
        .module('app.sensor')
        .controller('Sensor', sensor);

    sensor.$inject = ['datacontext'];

    function sensor(datacontext) {
        var vm = this;

        datacontext.boxes.getAll().then(function(result) {
            vm.boxes = result;
        });

    }
})();
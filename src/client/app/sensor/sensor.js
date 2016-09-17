(function() {
    'use strict';

    angular
        .module('app.sensor')
        .controller('Sensor', sensor);

    sensor.$inject = ['datacontext', 'authenticator'];

    function sensor(datacontext, authenticator) {
        var vm = this;

        vm.user = authenticator.getUser();

        datacontext.boxes.getAll().then(function(result) {
            vm.boxes = result;
        });

    }
})();
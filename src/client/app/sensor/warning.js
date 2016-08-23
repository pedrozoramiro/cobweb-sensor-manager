(function() {
    'use strict';

    angular.module('app.warning').controller('Warning', warning);

    warning.$inject = ['datacontext'];

    function warning(datacontext) {
        var vm = this;

        datacontext.boxes.getAll().then(function(result) {
            vm.boxes = result;
        });

    }
})();
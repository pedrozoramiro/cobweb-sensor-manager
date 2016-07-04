(function () {
    'use strict';

    angular.module('app.warning').controller('Warning', warning);

    warning.$inject = [];

    function warning() {
        var vm = this;
        vm.title = 'warning MALANDRO';
    }
})();

(function () {
    'use strict';

    angular.module('app.warning').controller('Warning', warning);

    warning.$inject = ['datacontext'];

    function warning(datacontext) {
        var vm = this;
        vm.title = datacontext.products.getAllProducts();
    }
})();

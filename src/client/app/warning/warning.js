(function () {
    'use strict';

    angular.module('app.warning').controller('Warning', warning);

    warning.$inject = ['datacontext'];

    function warning(datacontext) {
        var vm = this;
        vm.products = [];
        datacontext.products.getAll().then(function(result){
            vm.products = result;
            console.log(result);
        });
    }
})();

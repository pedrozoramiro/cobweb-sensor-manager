(function () {
    'use strict';

    angular.module('app.warning').controller('Warning', warning);

    warning.$inject = ['datacontext'];

    function warning(datacontext) {
        var vm = this;
        vm.products = [];
        vm.user={email:'Ramiro.Pedrozo@gmail.com'};
        vm.config={show : false};
        datacontext.products.getAll().then(function(result){
            vm.products = result;
        });
    }
})();

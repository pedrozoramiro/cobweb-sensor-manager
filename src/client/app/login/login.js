(function () {
    'use strict';

    angular.module('app.login').controller('LoginCrt', login);

    login.$inject = [];

    function login() {
        var vm = this;
        vm.title = 'LOGIN MALANDRO';
    }
})();

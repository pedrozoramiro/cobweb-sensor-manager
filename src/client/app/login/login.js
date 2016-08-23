(function() {
    'use strict';

    angular.module('app.login').controller('Login', login);

    login.$inject = [];

    function login() {
        var vm = this;
        vm.title = 'LOGIN MALANDRO';
    }
})();
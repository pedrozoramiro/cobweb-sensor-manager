(function() {
    'use strict';

    angular.module('app.login').controller('Login', login);

    login.$inject = ['datacontext'];

    function login(datacontext) {
        var vm = this;
        vm.authenticate = authenticate;

        function authenticate(user) {
            datacontext.auth.signin(user).then(function(token) {
                alert(token);
            });
        }
    }
})();
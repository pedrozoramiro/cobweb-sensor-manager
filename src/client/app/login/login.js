(function() {
    'use strict';

    angular.module('app.login').controller('Login', login);

    login.$inject = ['$location', 'datacontext', 'authenticator', 'logginRedirect'];

    function login($location, datacontext, authenticator, logginRedirect) {
        var vm = this;
        vm.authenticate = authenticate;

        function authenticate(user) {
            datacontext.auth.signin(user).then(function(response) {
                if (response.token) {
                    authenticator.login(response.token);
                    console.log(logginRedirect);
                    $location.path(logginRedirect);
                }
            });
        }
    }
})();
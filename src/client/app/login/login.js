(function() {
    'use strict';

    angular.module('app.login').controller('Login', Login);

    /** @ngInject */
    function Login(datacontext, authenticator, loginConfig) {
        var vm = this;
        vm.authenticate = authenticate;

        function authenticate(user) {
            datacontext.auth.signin(user).then(function(response) {
                console.log(response);
                console.log(response.token);
                if (response.token) {
                    authenticator.login(response.token);
                    loginConfig.navigateToHomePageAuthenticate();
                }
            });
        }
    }
})();
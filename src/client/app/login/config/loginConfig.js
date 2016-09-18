(function() {
    'use strict';

    angular
        .module('app.login')
        .factory('loginConfig', loginConfig)

    /** @ngInject */
    function loginConfig($location) {

        return {
            navigateToLogin: navigateToLogin,
            navigateToHomePageAuthenticate: navigateToHomePageAuthenticate
        }

        function isPublic(path) {
            $location.path('/login');
        }

        function navigateToLogin() {
            $location.path('/login');
        }

        function navigateToHomePageAuthenticate() {
            $location.path('/sensor');
        }
    }

}());
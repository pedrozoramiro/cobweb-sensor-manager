(function() {
    'use strict';

    var app = angular.module('app.login');

    app.factory('authInterceptor', ['$q', '$log', 'loginConfig', 'authenticator', authInterceptor]);

    function authInterceptor($q, $log, loginConfig, authenticator) {
        return {
            request: function(config) {
                config.headers = config.headers || {};
                if (authenticator.isLoggedIn()) {
                    config.headers.Authorization = 'Bearer ' + authenticator.getToken();
                }
                return config;
            },
            responseError: function(rejection) {
                if (rejection.status === 401) {
                    loginConfig.navigateToLogin();
                }
                return $q.reject(rejection);
            }
        };
    }

    app.config(function($httpProvider) {
        $httpProvider.interceptors.push('authInterceptor');
    });
})();
(function() {
    'use strict';

    var app = angular.module('app.login');

    app.factory('authInterceptor', ['$q', 'authenticator', authInterceptor]);

    function authInterceptor($q, authenticator) {
        return {
            request: function(config) {
                config.headers = config.headers || {};
                if (authenticator.isLoggedIn()) {
                    config.headers.Authorization = 'Bearer ' + authenticator.getToken();
                }
                return config;
            },
            responseError: function(rejection) {
                console.log(rejection);
                alert(rejection.data + ': ' + rejection.config.url);
                if (rejection.status === 401) {

                }
                return $q.reject(rejection);
            }
        };
    }

    app.config(function($httpProvider) {
        $httpProvider.interceptors.push('authInterceptor');
    });
})();
(function() {
    'use strict';

    var app = angular.module('app.login');

    app.factory('authInterceptor', ['$q', '$location', 'authenticator', authInterceptor]);

    function authInterceptor($q, $location, authenticator) {
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
                    $location.path(logginRedirect);
                }
                return $q.reject(rejection);
            }
        };
    }

    app.config(function($httpProvider) {
        $httpProvider.interceptors.push('authInterceptor');
    });
})();
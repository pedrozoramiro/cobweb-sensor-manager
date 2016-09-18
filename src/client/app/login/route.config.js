(function() {
    'use strict';
    angular.module('app.login').config(['$routeProvider', configureRoutes]);

    function configureRoutes($routeProvider) {
        $routeProvider
            .when('/login', {
                controllerAs: 'vm',
                controller: 'Login',
                isPublic: true,
                templateUrl: 'app/login/login.html'
            });
    }


    angular.module('app.login').run(['$rootScope', 'loginConfig', 'authenticator', function($rootScope, loginConfig, authenticator) {
        $rootScope.$on('$routeChangeStart', function(event, next, current) {

            if (next.isPublic) return;

            if (!authenticator.isLoggedIn()) {
                loginConfig.navigateToLogin();
                return;
            }
        });
    }]);
})();
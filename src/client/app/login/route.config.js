(function() {
    'use strict';
    angular.module('app.login').config(['$routeProvider', configureRoutes]);

    function configureRoutes($routeProvider) {
        $routeProvider
            .when('/login', {
                controllerAs: 'vm',
                controller: 'Login',
                templateUrl: 'app/login/login.html'
            });
    }


    angular.module('app.login').run(['$rootScope', '$location', 'logginRedirect', 'authenticator', function($rootScope, $location, logginRedirect, authenticator) {
        $rootScope.$on('$routeChangeStart', function(event) {
            if (!authenticator.isLoggedIn()) {
                event.preventDefault();
                $location.path('/login');
                return;
            }

            $location.path(logginRedirect);

        });
    }]);
})();
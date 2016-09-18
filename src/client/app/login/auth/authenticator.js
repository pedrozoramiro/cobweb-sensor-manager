(function() {
    'use strict';

    angular
        .module('app.login')
        .service('authenticator', Authenticator)

    Authenticator.$inject = ['$cookies', '$window'];

    function Authenticator($cookies, $window) {

        var service = {
            login: login,
            logout: logout,
            getUser: getUser,
            getToken: getToken,
            isLoggedIn: isLoggedIn
        };
        return service;

        function login(token) {
            saveToken(token);
        }

        function isLoggedIn() {
            return !!getToken();
        }

        function getUser() {
            var token = getToken();
            var infoToken = decodeInfoToken(token);
            return infoToken.user;
        }

        function saveToken(token) {
            $cookies.put('AUTH', token);
        }

        function getToken() {
            return $cookies.get('AUTH');
        }

        function logout() {
            $cookies.remove('AUTH');
        }

        function decodeInfoToken(token) {
            var base64Url = token.split('.')[1];
            var base64 = base64Url.replace('-', '+').replace('_', '/');
            return JSON.parse($window.atob(base64));
        }
    }


}());
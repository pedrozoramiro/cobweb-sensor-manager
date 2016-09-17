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
            var auth = decodeInfoToken(token);
            auth.token = token;
            saveAuthInCokkie(auth);
        }


        function getToken() {
            var auth = getAuth();
            return !auth ? undefined : auth.token;
        }

        function getUser() {
            var auth = getAuth();
            return !auth ? undefined : auth.user;
        }

        function isLoggedIn() {
            return !!getToken();
        }

        function getAuth() {
            var auth = getAuthInCokkie();

            if (!auth)
                return undefined;

            return auth;
        }

        function saveAuthInCokkie(auth) {
            $cookies.put('AUTH', auth);
        }

        function getAuthInCokkie() {
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
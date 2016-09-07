(function() {
    'use strict';

    angular
        .module('data')
        .factory('auth', Auth)
    Auth.$inject = ['$resource'];

    function Auth($resource) {
        var User = $resource('/api/user/:id', { id: '@_id' }, {
            signin: {
                url: '/api/user/signin',
                method: 'POST',
                params: {
                    userName: '@userName',
                    password: '@password'
                }
            }
        });
        return {
            signin: signin
        }

        function signin(user) {
            return User.signin(user).$promise;
        }
    }

}());
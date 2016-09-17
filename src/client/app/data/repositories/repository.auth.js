(function() {
    'use strict';

    angular.module('app.data').factory('repository.auth', RepositoryAuth);

    RepositoryAuth.$inject = ['$resource'];

    function RepositoryAuth($resource) {
        var User = $resource('/api/user/:id', { id: '@_id' }, {
            signin: {
                url: '/api/user/signin',
                method: 'POST'
            }
        });

        return {
            signin: signin
        };

        function signin(user) {
            return User.signin(undefined, user).$promise;
        }
    }

}());
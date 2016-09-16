(function () {
    'use strict';

    angular.module('app.data').factory('repository.products', RepositoryProducts);

    RepositoryProducts.$inject = ['$resource'];

    function RepositoryProducts($resource) {
        var Product = $resource('/api/products/:id',{id:'@_id'},{update:{method:"PUT"}});

        return {
            getAll: getAll
        };

        function getAll() {
            return Product.query().$promise;
        }
    }
})();
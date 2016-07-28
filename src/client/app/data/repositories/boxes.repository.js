(function () {
    'use strict';

    angular.module('app.data').factory('repository.boxes', RepositoryBoxes);

    RepositoryBoxes.$inject = ['$resource'];

    function RepositoryBoxes($resource) {
        var Boxes = $resource('/api/boxes/:id',{id:'@_id'},{update:{method:"PUT"}});

        return {
            getAll: getAll
        };

        function getAll() {
            return Boxes.query().$promise;
        }
    }
})();
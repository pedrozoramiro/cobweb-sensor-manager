(function() {
    'use strict';

    angular.module('app.data').factory('repository.boxes', RepositoryBoxes);

    RepositoryBoxes.$inject = ['$resource'];

    function RepositoryBoxes($resource) {
        var Boxes = $resource('/api/boxes/:id', { id: '@_id' }, {
            update: { method: "PUT" },
            findSensor: {
                url: '/api/boxes/:boxId/sensor/:sensorId',
                method: 'GET',
                params: {
                    boxId: '@boxId',
                    sensorId: '@sensorId'
                }
            }
        });
        
        return {
            getAll: getAll,
            getSensor: getSensor
        };

        function getAll() {
            return Boxes.query().$promise;
        }

        function getSensor(boxId, sensorId) {
            return Boxes.findSensor({ boxId: boxId, sensorId: sensorId }).$promise;
        }
    }
})();
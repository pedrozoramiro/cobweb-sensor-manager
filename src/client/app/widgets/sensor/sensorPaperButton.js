(function() {
    'use strict';

    angular
        .module('app.widgets')
        .directive('sensorPaperButton', sensorPaperButton);

    sensorPaperButton.$inject = ['$window'];

    function sensorPaperButton($window) {
        var directive = {
            scope: {
                'title': '@',
                'subtitle': '@',
                'time': '@',
                'icon': '@',
                'color': '@'
            },
            restrict: 'E',
            templateUrl: 'app/widgets/sensor/sensorPaperButton.html',
        };
        return directive;
    }
})();
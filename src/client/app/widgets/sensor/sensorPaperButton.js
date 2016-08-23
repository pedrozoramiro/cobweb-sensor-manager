(function() {
    'use strict';

    angular
        .module('app.widgets')
        .directive('sensorPaperButton', sensorPaperButton);

    sensorPaperButton.$inject = ['$window', '$location'];

    function sensorPaperButton($window, $location) {
        var directive = {
            scope: {
                'title': '@',
                'subtitle': '@',
                'time': '@',
                'icon': '@',
                'color': '@',
                'path': '@'
            },
            restrict: 'E',
            templateUrl: 'app/widgets/sensor/sensorPaperButton.html',
            link: function(scope, element, attrs) {

                scope.goTo = function() {
                    console.log(scope);
                    $location.path(scope.path);
                }
            }
        };
        return directive;
    }
})();
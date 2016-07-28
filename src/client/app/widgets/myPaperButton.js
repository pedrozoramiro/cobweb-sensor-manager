(function () {
    'use strict';

    angular
        .module('app.widgets')
        .directive('myPaperButton', myPaperButton);

    myPaperButton.$inject = ['$window'];

    function myPaperButton($window) {
        var directive = {
            scope: {
                'title': '@',
                'subtitle': '@',
                'time': '@',
                'icon': '@',
                'color':'@'
            },
            restrict: 'E',
            templateUrl: 'app/widgets/myPaperButton.html',
        };
        return directive;
    }
})();
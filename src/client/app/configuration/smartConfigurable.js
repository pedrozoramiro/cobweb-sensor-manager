(function () {
    'use strict';

    angular
        .module('app.config')
        .directive('smartConfiguratioPage', smartConfiguratioPage);

    smartConfiguratioPage.$inject = ['$window'];

    function smartConfiguratioPage($window) {

        var directive = {
            link: link,
            restrict: 'E'
        };
        return directive;

        function link(scope, element, attrs) {
            var i = 0;
            for (i = 0; i < element[0].children.length; i++) {
                $(element[0].children[i]).addClass('ng-hide');
            }
        }
    }
})();
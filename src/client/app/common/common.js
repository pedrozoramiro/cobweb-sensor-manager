(function() {
    'use strict';

    angular
        .module('app.common')
        .factory('common', common)

    common.$inject = ['logger', '$q'];

    function common(logger, $q) {

        return {
            log: logger,
            $q: $q
        }

    }

}());
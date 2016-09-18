(function() {
    'use strict';

    angular.module('app.common')
        .factory('logger', ['$log', factory]);

    function factory($log) {
        var logger = {
            error: error,
            info: info,
            success: success,
            warning: warning
        };

        return logger;

        function error(message, data, title) {
            $log.error('[ERROR]  ' + message, data);
        }

        function info(message, data, title) {
            $log.info('[INFO]  ' + message, data);
        }

        function success(message, data, title) {
            $log.info('[SUCCESS]  ' + message, data);
        }

        function warning(message, data, title) {
            $log.warn('[WARNING]  ' + message, data);
        }
    }
})();
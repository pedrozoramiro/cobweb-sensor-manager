(function() {
    'use strict';

    angular
        .module('app.data')
        .factory('datacontext', datacontext);

    datacontext.$inject = ['$injector'];

    function datacontext($injector) {
        var repoNames = ['products','boxes'];
        var service = {
            // Repositories to be added by defineLazyLoadedRepos
            //      products
            //      boxes
            
        };

        defineLazyLoadedRepos();

        return service;

        // Add ES5 property to datacontext for each named repo
        function defineLazyLoadedRepos() {
            repoNames.forEach(function(name) {
                Object.defineProperty(service, name, {
                    configurable: true,
                    get: function() {
                        // The 1st time the repo is request via this property,
                        // we ask the repositories for it (which will inject it).
                        var repo = getRepo(name);
                        // Rewrite this property to always return this repo;
                        // no longer redefinable
                        Object.defineProperty(service, name, {
                            value: repo,
                            configurable: false,
                            enumerable: true
                        });
                        return repo;
                    }
                });
            });
        }

        function getRepo(repoName) {
            var fullRepoName = 'repository.' + repoName.toLowerCase();
            var factory = $injector.get(fullRepoName);
            return factory;//factory.create();
        }

    }
})();
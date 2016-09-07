(function(){
    'use strict';

    angular
        .module('login')
        .factory('Factory', Factory)

    /** @ngInject */
    function Factory(Dependencies){

        return {
            fn: fn
        }

        function urlBase64Decode(str) {
           var output = str.replace('-', '+').replace('_', '/');
           switch (output.length % 4) {
               case 0:
                   break;
               case 2:
                   output += '==';
                   break;
               case 3:
                   output += '=';
                   break;
               default:
                   throw 'Illegal base64url string!';
           }
           return window.atob(output);
       }

       function getClaimsFromToken() {
           var token = $localStorage.token;
           var user = {};
           if (typeof token !== 'undefined') {
               var encoded = token.split('.')[1];
               user = JSON.parse(urlBase64Decode(encoded));
           }
           return user;
       }
    }

}());


angular.module('app')
   .factory('Auth', ['$http', '$localStorage', 'urls', function ($http, $localStorage, urls) {
      

       return {
           signup: function (data, success, error) {
               $http.post(urls.BASE + '/signup', data).success(success).error(error)
           },
           : function (data, success, error) {
               $http.post(urls.BASE + '/signin', data).success(success).error(error)
           },
           logout: function (success) {
               tokenClaims = {};
               delete $localStorage.token;
               success();
           },
           getTokenClaims: function () {
               return tokenClaims;
           }
       };
   }
   ]);
(function () {
  'use strict';
  
  angular
    .module('OBApp')
    .factory('userService', userService);
    
    userService.$inject = ['$http', 'API'];
    
    function userService($http, API){
      return {
        login: login
      }
      
      function login(username, password){
        return $http.post(API + '/auth/login', {
            username: username,
            password: password
          })
      }
    }
  })();
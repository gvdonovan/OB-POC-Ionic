'use strict';
  
  angular
    .module('OBApp')
    .config(configure);
    
 configure.$inject = ['$httpProvider'];
 
 function configure($httpProvider){
   $httpProvider.interceptors.push('authInterceptor');
 }
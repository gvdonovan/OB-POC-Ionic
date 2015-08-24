(function () {
  'use strict';

  angular
    .module('OBApp')
    .controller('LoginCtrl', LoginCtrl);

  LoginCtrl.$inject = ['$state'];

  /* @ngInject */
  function LoginCtrl($state) {
    /* jshint validthis: true */
    var vm = this;

    vm.title = '';
    vm.user = {};

    vm.login = function (user) {
      console.log('Login', user);
      $state.go('tab.dash');
    };

    vm.testFunc = function(){
      console.log(234);
    };



  }

})();
(function () {
  'use strict';

  angular
    .module('OBApp')
    .controller('AccountCtrl', AccountCtrl);

  AccountCtrl.$inject = ['$state'];

  /* @ngInject */
  function AccountCtrl($state) {
    /* jshint validthis: true */
    var vm = this;

    vm.activate = activate;
    vm.title = '';

    activate();

    ////////////////

    function activate() {
    }


  }

})();
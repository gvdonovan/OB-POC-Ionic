(function () {
  'use strict';

  angular
    .module('OBApp')
    .controller('DashCtrl', DashCtrl);

  DashCtrl.$inject = ['$state'];

  /* @ngInject */
  function DashCtrl() {
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
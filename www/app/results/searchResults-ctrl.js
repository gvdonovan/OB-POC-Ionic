(function () {
  'use strict';

  angular
    .module('OBApp')
    .controller('SearchResultsCtrl', SearchResultsCtrl);

  SearchResultsCtrl.$inject = ['$timeout', 'dataService'];

  /* @ngInject */
  function SearchResultsCtrl($timeout, dataService) {
    /* jshint validthis: true */
    var vm = this;

    vm.activate = activate;
    vm.title = '';

    vm.data = {};
    vm.isLoading = true;

    $timeout(function () {
      vm.isLoading = false;
    }, 1000);

    var columns = dataService.columns;
    vm.data.columns = columns;

    var items = dataService.getData();
    vm.data.items = items;

    var groups = dataService.groups;
    vm.data.groups = groups;

    var products = dataService.getProducts();
    vm.data.products = products;

    vm.toggleGroup = function(group) {
      if (vm.isGroupShown(group)) {
        vm.shownGroup = null;
      } else {
        vm.shownGroup = group;
      }
    };
    vm.isGroupShown = function(group) {
      return vm.shownGroup === group;
    };

    activate();

    ////////////////

    function activate() {
    }


  }

})();
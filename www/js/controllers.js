angular.module('starter.controllers', [])

  .controller('LoginCtrl', function($scope, $state) {
    $scope.login = function(user) {
      console.log('Login', user);
      $state.go('tab.dash');
    };
  })
  .controller('DashCtrl', function($scope) {})

  .controller('SearchCtrl', function($scope, $state) {
    $scope.search = function() {
      $state.go('tab.results');
    };
  })

  .controller('SearchResultsCtrl', function($scope, dataService) {
    $scope.data = {};

    var columns = dataService.columns;
    $scope.data.columns = columns;

    var items = dataService.getData();
    $scope.data.items = items;

    var groups = dataService.groups;
    $scope.data.groups = groups;

    var products = dataService.getProducts();
    $scope.data.products = products;


    $scope.toggleGroup = function(group) {
      if ($scope.isGroupShown(group)) {
        $scope.shownGroup = null;
      } else {
        $scope.shownGroup = group;
      }
    };
    $scope.isGroupShown = function(group) {
        return $scope.shownGroup === group;
      };

  })

  .controller('SearchResultDetailsCtrl', function($scope, $stateParams) {
      var title = $stateParams.resultId;
      $scope.title = "Id = " + title;
  })

  .controller('AccountCtrl', function($scope) {
    $scope.settings = {
      enableFriends: true
    }
  })

  .controller('AccordionCtrl', function($scope) {
    $scope.groups = [];
    for (var i=0; i<10; i++) {
      $scope.groups[i] = {
        name: i,
        items: []
      };
      for (var j=0; j<3; j++) {
        $scope.groups[i].items.push(i + '-' + j);
      }
    }

    $scope.toggleGroup = function(group) {
      if ($scope.isGroupShown(group)) {
        $scope.shownGroup = null;
      } else {
        $scope.shownGroup = group;
      }
    };
    $scope.isGroupShown = function(group) {
      return $scope.shownGroup === group;
    };
  });


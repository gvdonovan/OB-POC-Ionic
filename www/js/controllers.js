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
    $state.go('tab.search-results');
  };
})

.controller('SearchResultsCtrl', function($scope, Chats) {
  $scope.results = Chats.all();
})

.controller('SearchResultDetailsCtrl', function($scope) {
})

.controller('ChatsCtrl', function($scope, Chats) {
  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  $scope.chats = Chats.all();
  $scope.remove = function(chat) {
    Chats.remove(chat);
  };
})

.controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
  $scope.chat = Chats.get($stateParams.chatId);
})

.controller('AccountCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
});

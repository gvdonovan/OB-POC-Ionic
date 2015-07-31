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
  $scope.data = {};
  $scope.data.columns = [{"id":"1453","name":"Rate"},{"id":"1355","name":"Points"},{"id":"0393","name":"APR"},{"id":"3932","name":"Term"},{"id":"2939","name":"Closing"},{"id":"1234","name":"Rebate"}];
  $scope.data.items = [{"1234":"Pink","1355":"21 oz.","1453":"ea","2939":"3 in.","3932":"29  in.","0393":"12  in."},{"1234":"Black","1355":"26 oz.","1453":"irure","2939":"13 in.","3932":"9  in.","0393":"19  in."},{"1234":"Yellow","1355":"1 oz.","1453":"laborum","2939":"12 in.","3932":"27  in.","0393":"1  in."},{"1234":"Gold","1355":"19 oz.","1453":"magna","2939":"27 in.","3932":"23  in.","0393":"22  in."},{"1234":"Purple","1355":"24 oz.","1453":"in","2939":"9 in.","3932":"23  in.","0393":"25  in."},{"1234":"Silver","1355":"32 oz.","1453":"labore","2939":"12 in.","3932":"22  in.","0393":"12  in."},{"1234":"Brown","1355":"7 oz.","1453":"reprehenderit","2939":"13 in.","3932":"30  in.","0393":"1  in."},{"1234":"Gold","1355":"6 oz.","1453":"culpa","2939":"11 in.","3932":"31  in.","0393":"16  in."},{"1234":"Pink","1355":"19 oz.","1453":"est","2939":"29 in.","3932":"29  in.","0393":"24  in."},{"1234":"Silver","1355":"10 oz.","1453":"adipisicing","2939":"7 in.","3932":"0  in.","0393":"23  in."},{"1234":"Brown","1355":"15 oz.","1453":"et","2939":"6 in.","3932":"0  in.","0393":"4  in."},{"1234":"Purple","1355":"27 oz.","1453":"fugiat","2939":"18 in.","3932":"21  in.","0393":"27  in."},{"1234":"Red","1355":"23 oz.","1453":"irure","2939":"16 in.","3932":"21  in.","0393":"22  in."},{"1234":"Brown","1355":"18 oz.","1453":"eu","2939":"31 in.","3932":"28  in.","0393":"11  in."}];
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

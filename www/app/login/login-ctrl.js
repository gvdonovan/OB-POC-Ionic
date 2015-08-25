(function () {
  'use strict';

  angular
    .module('OBApp')
    .controller('LoginCtrl', LoginCtrl);

  LoginCtrl.$inject = ['$state','$ionicLoading', '$ionicPopup', 'userService', 'authService', '$cordovaContacts'];

  /* @ngInject */
  function LoginCtrl($state, $ionicLoading,$ionicPopup, userService, authService, $cordovaContacts) {
    /* jshint validthis: true */
    var vm = this;

    vm.title = '';
    vm.user = {};

    vm.login = login;
    vm.pickContacts = pickContacts;
    
    function login(){
      $ionicLoading.show({
          content:'Loading',
          animation: 'fade-in',
          showBackdrop: true,
          showDelay:0
      });
      
      userService.login(vm.user.username, vm.user.password).then(function(){
        if(authService.isAuthenticated()){
          $ionicLoading.hide();
          vm.user={};
          $state.go('tab.dash');
        }else{
          $ionicLoading.hide();
            vm.user.password = "";
            var alertPopup = $ionicPopup.alert({
                title: 'Login failed!',
                template: 'Please check your credentials!'
            });
        }
        
      });
    }
    
    function pickContacts(){
      $cordovaContacts.pickContact().then(function (contactPicked) {
        console.log(contactPicked);
      });
    }
  }

})();
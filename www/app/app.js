'use strict';

angular.module('OBApp', [
  'ionic',
  'formlyIonic'
])

  .run(function($ionicPlatform) {
    $ionicPlatform.ready(function() {
      // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
      // for form inputs)
      if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
        cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
        cordova.plugins.Keyboard.disableScroll(true);

      }
      if (window.StatusBar) {
        // org.apache.cordova.statusbar required
        StatusBar.styleLightContent();
      }
    });
  })
  .run(function ($rootScope, $state, authService) {
  $rootScope.$on('$stateChangeStart', function (event,next, nextParams, fromState) {
    if ('data' in next && 'authenticationNeeded' in next.data) {
      if (!authService.isAuthenticated()) {
        if (next.name !== 'login') {
          event.preventDefault();
          $state.go('login');
        }
      }
    }
  });
});

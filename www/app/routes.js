'use strict';

angular
  .module('OBApp')


  .config(function ($stateProvider, $urlRouterProvider) {

    // Ionic uses AngularUI Router which uses the concept of states
    // Learn more here: https://github.com/angular-ui/ui-router
    // Set up the various states which the app can be in.
    // Each state's controller can be found in controllers.js
    $stateProvider

      .state('login', {
        url: '/login',
        templateUrl: 'templates/login.html',
        controller: 'LoginCtrl as vm'
      })
      .state('tab', {
        url: '/tab',
        abstract: true,
        templateUrl: 'templates/tabs.html',
        data: {
          authenticationNeeded: true
        }
      })
      .state('tab.dash', {
        url: '/dash',
        views: {
          'tab-dash': {
            templateUrl: 'templates/tab-dash.html',
            controller: 'DashCtrl as dash'
          }
        }
      })
      .state('tab.search', {
        url: '/search',
        views: {
          'tab-search': {
            templateUrl: 'templates/tab-search.html',
            controller: 'SearchCtrl as search'
          }
        }
      })
      .state('tab.results', {
        url: '/results',
        views: {
          'tab-search': {
            templateUrl: 'templates/tab-search-results.html',
            controller: 'SearchResultsCtrl as sr'
          }
        }
      })
      .state('tab.result-detail', {
        url: '/results/:resultId',
        views: {
          'tab-search': {
            templateUrl: 'templates/tab-search-result-details.html',
            controller: 'SearchResultDetailsCtrl as srd'
          }
        }
      })
      .state('tab.account', {
        url: '/account',
        views: {
          'tab-account': {
            templateUrl: 'templates/tab-account.html',
            controller: 'AccountCtrl as vm'
          }
        }
      });

    // if none of the above states are matched, use this as the fallback
    $urlRouterProvider.otherwise('/login');

  });
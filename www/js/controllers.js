angular.module('starter.controllers', [])

    .controller('LoginCtrl', function ($scope, $state) {
        $scope.login = function (user) {
            console.log('Login', user);
            $state.go('tab.dash');
        };
    })

    .controller('DashCtrl', function ($scope) {
    })

    .controller('SearchCtrl', function ($scope, $state) {
      $scope.showError = true;

      $scope.formFields = [
        {
          key: 'occupancy',
          type: 'select',
          templateOptions: {
            label: 'Occupancy',
            options: [
              {
                label: 'Owner Occupied',
                id: 'owner_occupied',
                val: '1'
              },
              {
                label: 'Other',
                id: 'other',
                val: '1'
              },
              {
                label: 'Biff',
                id: 'biff',
                val: '2'
              },
            ],
            "groupProp": 'val',
            "valueProp": 'id',
            "labelProp": 'label'
          }
        },
        {
          key: 'propertyType',
          type: 'select',
          templateOptions: {
            label: 'Property Type',
            options: [
              {
                label: 'Single Family',
                value: 'single_family'
              },
              {
                label: 'PUD',
                value: 'pud'
              },
              {
                label: 'Multi-Family',
                value: 'multi_family'
              },
              {
                label: 'Manufactured / Single Wide',
                value: 'manufactured_single_wide'
              },
              {
                label: 'Manufactured / Double Wide',
                value: 'manufactured_double_wide'
              },
              {
                label: 'Timeshare',
                value: 'timeshare'
              },
              {
                label: 'Condotel',
                value: 'condotel'
              },
              {
                label: 'Non-warrantable Condo',
                value: 'non_warrantable_condo'
              },
              {
                label: 'Modular',
                value: 'modular'
              },
            ],
            valueProp: 'value',
            labelProp: 'label',
            required: true
          },
          validators: {
            message: '$viewValue + " is not a valid IP Address"'
          }
        },
        {
          key: 'text',
          type: 'input',
          templateOptions: {
            type: 'text',
            placeholder: 'Formly is terrific!',
            required: true
          }
        },
        {
          key: 'story',
          type: 'textarea',
          templateOptions: {
            placeholder: 'It allows you to build and maintain your forms with the ease of JavaScript :-)'
          }
        },
        {
          key: 'toggle',
          type: 'toggle',
          templateOptions: {
            label: 'Remember Me?',
            toggleClass: "assertive"
          }
        },
        {
          key: 'slider',
          type: 'range',
          templateOptions: {
            label: 'Scale',
            rangeClass: "calm",
            min: '0',
            max: '100',
            step: '5',
            value: '25',
            minIcon: 'ion-volume-low',
            maxIcon: 'ion-volume-high'

          }
        }];
      $scope.formData = {};

      $scope.logForm = function(data){
        console.warn(data);
      };

      $scope.search = function () {
        $state.go('tab.results');
      };
    })

    .controller('SearchResultsCtrl', function ($scope, dataService) {
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
        };})

    .controller('SearchResultDetailsCtrl', function ($scope) {
    })

    .controller('ChatsCtrl', function ($scope, Chats) {
        // With the new view caching in Ionic, Controllers are only called
        // when they are recreated or on app start, instead of every page change.
        // To listen for when this page is active (for example, to refresh data),
        // listen for the $ionicView.enter event:
        //
        //$scope.$on('$ionicView.enter', function(e) {
        //});

        $scope.chats = Chats.all();
        $scope.remove = function (chat) {
            Chats.remove(chat);
        };
    })

    .controller('ChatDetailCtrl', function ($scope, $stateParams, Chats) {
        $scope.chat = Chats.get($stateParams.chatId);
    })

    .controller('AccountCtrl', function ($scope) {
        $scope.settings = {
            enableFriends: true
        }
    })

    .controller('AccordionCtrl', function ($scope) {
        $scope.groups = [];
        for (var i = 0; i < 10; i++) {
            $scope.groups[i] = {
                name: i,
                items: []
            };
            for (var j = 0; j < 3; j++) {
                $scope.groups[i].items.push(i + '-' + j);
            }
        }

        $scope.toggleGroup = function (group) {
            if ($scope.isGroupShown(group)) {
                $scope.shownGroup = null;
            } else {
                $scope.shownGroup = group;
            }
        };
        $scope.isGroupShown = function (group) {
            return $scope.shownGroup === group;
        };
    });


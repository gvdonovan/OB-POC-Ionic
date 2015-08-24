(function () {
  'use strict';

  angular
    .module('OBApp')
    .controller('SearchCtrl', SearchCtrl);

  SearchCtrl.$inject = ['$state'];

  /* @ngInject */
  function SearchCtrl($state) {
    /* jshint validthis: true */
    var vm = this;

    vm.activate = activate;
    vm.title = '';

    vm.showError = true;

    vm.formFields = [
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
    vm.formData = {};

    vm.logForm = function(data){
      console.warn(data);
    };

    vm.search = function () {
      $state.go('tab.results');
    };

    activate();

    ////////////////

    function activate() {
    }


  }

})();
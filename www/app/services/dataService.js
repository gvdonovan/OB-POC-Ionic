(function () {
  'use strict';

  angular
    .module('OBApp')
    .factory('dataService', dataService);

  dataService.$inject = [''];

  /* @ngInject */
  function dataService() {

    var groups = [
      {"id": "1", "name": "30 Year Peforming Fixed"},
      {"id": "2", "name": "30 Year FHA"},
      {"id": "3", "name": "15 Year Peforming Fixed"}
    ];

    var columns = [
      {"id": "rate", "name": "Rate"},
      {"id": "points", "name": "Points"},
      {"id": "apr", "name": "APR"},
      {"id": "months", "name": "Term"},
      {"id": "closing", "name": "Closing"},
      {"id": "rebate", "name": "Rebate"}];

    var products = [
      {
        "groupId": "1",
        "groupName": "30 Year Performing Fixed",
        "id": 1,
        "rebate": "$1000",
        "points": "1",
        "rate": "3.500",
        "closing": "3",
        "months": "360",
        "apr": "3.86"
      },
      {
        "groupId": "1",
        "groupName": "30 Year Performing Fixed",
        "id": 2,
        "rebate": "$1000",
        "points": "1",
        "rate": "3.500",
        "closing": "13",
        "months": "360",
        "apr": "3.86"
      },
      {
        "groupId": "1",
        "groupName": "30 Year Performing Fixed",
        "id": 3,
        "rebate": "$1000",
        "points": "1",
        "rate": "3.500",
        "closing": "12",
        "months": "360",
        "apr": "3.86"
      },
      {
        "groupId": "1",
        "groupName": "30 Year Performing Fixed",
        "id": 4,
        "rebate": "$1000",
        "points": "1",
        "rate": "3.500",
        "closing": "27",
        "months": "360",
        "apr": "3.86 "
      },
      {
        "groupId": "1",
        "groupName": "30 Year Performing Fixed",
        "id": 5,
        "rebate": "$1000",
        "points": "1",
        "rate": "3.500",
        "closing": "9",
        "months": "360",
        "apr": "3.86"
      },
      {
        "groupId": "1",
        "groupName": "30 Year Performing Fixed",
        "id": 6,
        "rebate": "$1000",
        "points": "1",
        "rate": "3.500",
        "closing": "12",
        "months": "360",
        "apr": "3.86"
      },
      {
        "groupId": "1",
        "groupName": "30 Year Performing Fixed",
        "id": 7,
        "rebate": "$1000",
        "points": "1",
        "rate": "3.500",
        "closing": "13",
        "months": "360",
        "apr": "3.86"
      },
      {
        "groupId": "1",
        "groupName": "30 Year Performing Fixed",
        "id": 8,
        "rebate": "$1000",
        "points": "1",
        "rate": "3.500",
        "closing": "11",
        "months": "360",
        "apr": "3.86"
      },
      {
        "groupId": "1",
        "groupName": "30 Year Performing Fixed",
        "id": 9,
        "rebate": "$1000",
        "points": "1",
        "rate": "3.500",
        "closing": "29",
        "months": "360",
        "apr": "3.86"
      },
      {
        "groupId": "2",
        "groupName": "30 Year FHA",
        "id": 10,
        "rebate": "$1000",
        "points": "1",
        "rate": "3.500",
        "closing": "7",
        "months": "360",
        "apr": "3.86"
      },
      {
        "groupId": "2",
        "groupName": "30 Year FHA",
        "id": 11,
        "rebate": "$1000",
        "points": "1",
        "rate": "3.500",
        "closing": "6",
        "months": "360",
        "apr": "3.86"
      },
      {
        "groupId": "2",
        "groupName": "30 Year FHA",
        "id": 12,
        "rebate": "$1000",
        "points": "2",
        "rate": "3.500",
        "closing": "18",
        "months": "360",
        "apr": "3.86"
      },
      {
        "groupId": "3",
        "groupName": "15 Year Performing Fixed",
        "id": 13,
        "rebate": "$1000",
        "points": "1",
        "rate": "3.500",
        "closing": "16",
        "months": "360",
        "apr": "3.86"
      },
      {
        "groupId": "3",
        "groupName": "15 Year Performing Fixed",
        "id": 14,
        "rebate": "$1000",
        "points": "1",
        "rate": "3.500",
        "closing": "31",
        "months": "360",
        "apr": "3.86"
      }];


    return {
      columns: columns,
      groups: groups,
      getData: function () {
        return products;
      },
      //getProducts: function() {return _.chain(products).groupBy("groupName").sortBy("groupId")},
      //getProducts: function() {return _.chain(products).groupBy("groupName").sortBy("groupId").map(function(value))},
      getProducts: function () {
        return _.chain(products).groupBy("groupName").map(function (data, key) {
          return {
            group: key,
            products: data
          }
        }).value()
      },
      get: function (id) {
        //for (var i = 0; i < chats.length; i++) {
        //  if (chats[i].id === parseInt(chatId)) {
        //    return chats[i];
        //  }
        //}
        return null;
      }
    };


  }


})();


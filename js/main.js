var app = angular.module('vlinssApp', ['ngRoute']);

app.controller('vlinssController', function($scope) {});

app.config(['$routeProvider',
  function($routeProvider) {
    "use strict";
    $routeProvider
      .when('/', {
        templateUrl: 'sites/main.html',
        controller: 'vlinssController'
      })
      .when('/onas', {
        templateUrl: 'sites/onas.html',
        controller: 'vlinssController'
      })
      .otherwise({
        redirectTo: '/'
      });
  }
]);


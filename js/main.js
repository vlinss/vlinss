var app = angular.module('vlinssApp', ['ngRoute']);

app.controller('VlinssController', function() {});

app.config(['$routeProvider',
  function($routeProvider) {
    "use strict";
    $routeProvider
      .when('/', {
        templateUrl: 'sites/main.html',
        controller: 'VlinssController'
      })
      .when('/onas', {
        templateUrl: 'sites/onas.html',
        controller: 'VlinssController'
      })
      .when('/ubezpieczenia', {
        templateUrl: 'sites/ubezpieczenia.html',
        controller: 'VlinssController'
      })
      .when('/odszkodowania', {
        templateUrl: 'sites/odszkodowania.html',
        controller: 'VlinssController'
      })
      .when('/uslugi', {
        templateUrl: 'sites/uslugi.html',
        controller: 'VlinssController'
      })
      .when('/kontakt', {
        templateUrl: 'sites/kontakt.html',
        controller: 'VlinssController'
      })
      .otherwise({
        redirectTo: '/'
      });
  }
]);


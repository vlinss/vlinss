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

//function initialize() {
//  "use strict";
//  var mapCanvas = document.getElementById('map');
//  var iconBase = 'https://maps.google.com/mapfiles/kml/shapes/';
//  var mapOptions = {
//    center: new google.maps.LatLng(54.3849507,19.8258406),
//    zoom: 17,
//    mapTypeId: google.maps.MapTypeId.ROADMAP
//  };
//  var map = new google.maps.Map(mapCanvas, mapOptions);
//  var marker = new google.maps.Marker({
//    position: new google.maps.LatLng(54.3849507,19.8258406),
//    map: map,
//    icon: iconBase + 'schools_maps.png'
//  });
//}
//
//google.maps.event.addDomListener(window, 'load', initialize);
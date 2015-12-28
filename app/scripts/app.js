define(['angular', 'angularRoute'], function() {
  var chartApp = angular.module("chartApp", ["ngRoute"]);
  chartApp.config(function($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl : '/templates/charts_index.html',
        controller  : 'mainController'
      })
      .when('/chart-detail/:chartId', {
        templateUrl : '/templates/chart_detail.html',
        controller  : 'mainController'
      })
      .when('/about', {
        templateUrl : '/templates/about.html',
        controller  : 'mainController'
      });
  });
  return chartApp;
});

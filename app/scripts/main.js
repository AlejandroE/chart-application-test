/*global require*/
'use strict';

require.config({
  shim: {
    underscore: {
      exports: '_'
    },
    angular: {
      deps: [
      'underscore',
      'jquery'
      ],
      exports: 'angular'
    },
    angularRoute: {
      deps: ['angular']
    }
  },
  paths: {
    jquery: '../bower_components/jquery/jquery',
    underscore: '../bower_components/underscore/underscore',
    angular: '../bower_components/angular/angular',
    angularRoute : '../bower_components/angular-route/angular-route',
    highCharts : '../bower_components/highCharts/highCharts',
  }
});

require(['angular', 'app', 'controllers', 'directives', 'highCharts', 'services'], function (app) {
  angular.element(document).ready(function () {
    angular.bootstrap(document, ['chartApp']);
  });
});

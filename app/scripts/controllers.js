define(['app'], function(app) {
  app.controller("mainController", function($scope, dataService, $location, $routeParams) {
      $scope.charts = [];
      $scope.currentChart =  $routeParams.hasOwnProperty("chartId") ? $routeParams.chartId : undefined;
      $scope.goToChart = function(id) {
         $location.path("/chart-detail/"+id);
      };
  });
});

define(['app', 'services'], function(app) {
  app.directive('chart', function (dataService) {
  return {
    restrict: 'C',
    replace: false,
    template: '<div id="container" style="margin: 0 auto">Loading...</div>\
      <div class="chart-controls">\
        <span class="chart-controls__label">Change Chart Type: </span>\
        <select class="chart-controls__select" ng-model="userChartType" ng-change="changeType()">\
          <option value="pie">Pie</option>\
          <option value="line">Line</option>\
          <option value="column">Column</option>\
          <option value="area">Area</option>\
        </select>\
      </div>',
    link: function (scope, element, attrs) {
      var chartContainer = element.find('#container');
      var chartInstance;
      var interactionEnabled = attrs.hasOwnProperty('thumb') ? false : true;
      var dataPromise = dataService.getInitData();
        dataPromise.then(function(data) {

        //if directive template has attribute chartId use it,
        //otherwise ask controller to get provide it
        //TODO: refactor as service.
        if (attrs.hasOwnProperty('chartId')) {
          var chartId = parseInt(attrs.chartId);
        } else{
          var chartId = parseInt(scope.currentChart);
        };
        //TODO: pull each resourse from own endpoint
        var chartData = _.findWhere(data.charts, {id: chartId});
        instantiateChart(chartData);
        scope.userChartType = chartData.series[0].type;
      });

      if (!interactionEnabled){
        element.find('.chart-controls').remove();
      }

      var instantiateChart = function (chartData) {
        chartInstance = new Highcharts.Chart({
          chart: {
            renderTo: chartContainer[0],
            plotBackgroundColor: null,
            plotBorderWidth: null,
            plotShadow: false
          },
          title: {
            text: 'Demo data representation for ' + chartData.series[0].name
          },
          tooltip: {
            followPointer: interactionEnabled,
            followTouchMove: interactionEnabled,
            pointFormat: '{series.name}: <b>{point.percentage}%</b>',
            percentageDecimals: 1
          },
          plotOptions: {
            series:{
              animation: interactionEnabled,
              enableMouseTracking: interactionEnabled
            },
            pie: {
              allowPointSelect: interactionEnabled,
              cursor: 'pointer',
              dataLabels: {
                enabled: interactionEnabled,
                color: '#000000',
                connectorColor: '#000000',
                formatter: function () {
                  return '<b>' + this.point.name + '</b>: ' + this.percentage + ' %';
                }
              }
            }
          },
          series: chartData.series
        });
      };
      scope.changeType = function() {
        chartInstance.series[0].update({
          type: scope.userChartType
        });
      };
    }
  }});
});

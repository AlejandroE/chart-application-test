define(['app'], function(app) {
  app.service('dataService', function($http, $q) {
    this.getInitData = function() {
      var defered = $q.defer();
      var promise = defered.promise;
      $http.get('/resources/data.json')
        .success(function(data) {
          defered.resolve(data);
        })
        .error(function(err) {
          defered.reject(err)
        });
      return promise;
    };
  });
});

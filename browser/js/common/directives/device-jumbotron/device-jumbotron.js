app.directive('deviceJumbotron', function() {
  return {
    restrict: 'E',
    templateUrl: 'js/common/directives/device-jumbotron/device-jumbotron.html',
    scope: {
      device: '='
    }
  }
})
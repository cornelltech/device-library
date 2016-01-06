app.config(function($stateProvider) {
  $stateProvider.state('device', {
    url: '/device/:id',
    templateUrl: 'js/device/device.html',
    resolve: {
      device: ($stateParams, LibraryFactory) => LibraryFactory.getDevice($stateParams.id)
    },
    controller: ($scope, device) => {
      $scope.device = device

    }
  });
});
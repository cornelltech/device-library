app.config(function($stateProvider) {
  $stateProvider.state('devices', {
    url: '/devices',
    templateUrl: 'js/devices/devices.html',
    resolve: {
      categories: (LibraryFactory) => LibraryFactory.getCategories(),
      devices: (LibraryFactory) => LibraryFactory.getDevices()
    },
    controller: ($scope, categories, devices) => {
      $scope.categories = categories
      $scope.devices = devices
    }
  });
});
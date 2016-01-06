app.config(function($stateProvider) {
  $stateProvider.state('home', {
    url: '/',
    templateUrl: 'js/home/home.html',
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
app.config(function($stateProvider) {
  $stateProvider.state('donate', {
    url: '/donate',
    templateUrl: 'js/donate/donate.html',
    resolve: {
      donors: (LibraryFactory) => LibraryFactory.getDonors()
    },
    controller: ($scope, donors) => {
      $scope.donors = donors
    }
  });
});
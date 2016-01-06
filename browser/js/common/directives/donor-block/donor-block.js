app.directive('donorBlock', function() {
  return {
    restrict: 'E',
    templateUrl: 'js/common/directives/donor-block/donor-block.html',
    scope: {
      donor: '='
    }
  }
})
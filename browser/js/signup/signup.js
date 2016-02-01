app.config(function($stateProvider) {
    $stateProvider.state('signup', {
        url: '/signup',
        templateUrl: 'js/signup/signup.html',
        controller: ($scope, AuthService, $state) => {
            $scope.sendSignup = function(signupInfo) {
                $state.go('home');
            }
        }
    });
});
app.config(function($stateProvider) {
  $stateProvider
    .state('dashboard', {
      url: '/dashboard',
      templateUrl: 'js/dashboard/dashboard.html',
      data: {
        authenticate: true
      },
      abstract: true,
      defaultChild: 'dashboard.checkedout',
      resolve: {
        user: (AuthService) => AuthService.getLoggedInUser()
      },
      controller: ($scope, user) => {
        $scope.user = user
        $scope.today = new Date().toISOString()
        $scope.items = [{
          label: 'Manage Categories',
          state: 'dashboard.manageCategories',
          admin: true
        }, {
          label: 'Manage Devices',
          state: 'dashboard.manageDevices',
          admin: true
        }, {
          label: 'Manage Donors',
          state: 'dashboard.manageDonors',
          admin: true
        }, {
          label: 'Manage Users',
          state: 'dashboard.manageUsers',
          admin: true
        }, {
          label: 'Checked out',
          state: 'dashboard.checkedout',
        }, {
          label: 'Holds',
          state: 'dashboard.holds',
        }, {
          label: 'Returned',
          state: 'dashboard.returned',
        }, {
          label: 'My favs',
          state: 'dashboard.favs',
        }, {
          label: 'Settings',
          state: 'dashboard.settings',
        }, {
          label: 'Contact',
          state: 'dashboard.contact',
        }]

        // $(document).ready(function() {
        //   var trigger = $('.hamburger'),
        //     overlay = $('.overlay'),
        //     isClosed = false;

        //   trigger.click(function() {
        //     hamburger_cross();
        //   });

        //   function hamburger_cross() {

        //     if (isClosed == true) {
        //       overlay.hide();
        //       trigger.removeClass('is-open');
        //       trigger.addClass('is-closed');
        //       isClosed = false;
        //     } else {
        //       overlay.show();
        //       trigger.removeClass('is-closed');
        //       trigger.addClass('is-open');
        //       isClosed = true;
        //     }
        //   }

        //   $('[data-toggle="offcanvas"]').click(function() {
        //     $('#wrapper').toggleClass('toggled');
        //   });
        //});
      }
    })
    .state('dashboard.checkedout', {
      url: '/checkedout',
      templateUrl: 'js/dashboard/dashboard-checkedout.html',
    })
    .state('dashboard.holds', {
      url: '/holds',
      templateUrl: 'js/dashboard/dashboard-holds.html',
    })
    .state('dashboard.returned', {
      url: '/returned',
      templateUrl: 'js/dashboard/dashboard-returned.html',
    })
    .state('dashboard.favs', {
      url: '/favs',
      templateUrl: 'js/dashboard/dashboard-favs.html',
    })
    .state('dashboard.settings', {
      url: '/settings',
      templateUrl: 'js/dashboard/dashboard-settings.html',
    })
    .state('dashboard.contact', {
      url: '/contact',
      templateUrl: 'js/dashboard/dashboard-contact.html',
    })
    .state('dashboard.manageCategories', {
      url: '/manage-categories',
      templateUrl: 'js/dashboard/dashboard-manage-categories.html',
      resolve: {
        categories: (LibraryFactory) => LibraryFactory.getCategories()
      },
      controller: ($scope, categories) => {
        $scope.categories = categories
      }
    })
    .state('dashboard.manageDevices', {
      url: '/manage-devices',
      templateUrl: 'js/dashboard/dashboard-manage-devices.html',
      resolve: {
        devices: (LibraryFactory) => LibraryFactory.getDevices()
      },
      controller: ($scope, devices) => {
        $scope.devices = devices
      }
    })
    .state('dashboard.manageDonors', {
      url: '/manage-donors',
      templateUrl: 'js/dashboard/dashboard-manage-donors.html',
      resolve: {
        donors: (LibraryFactory) => LibraryFactory.getDonors()
      },
      controller: ($scope, donors) => {
        $scope.donors = donors

        //add donors
      }
    })
    .state('dashboard.manageUsers', {
      url: '/manage-users',
      templateUrl: 'js/dashboard/dashboard-manage-users.html',
      resolve: {
        users: (LibraryFactory) => LibraryFactory.getUsers()
      },
      controller: ($scope, users) => {
        $scope.users = users
          //users
          //add users
      }
    })
});
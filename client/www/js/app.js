angular.module('app', ['ngNaiFramework', 'app.services', 'app.directives', 'app.controllers'])
    .config(function($routeProvider, localStorageServiceProvider) {
        $routeProvider
            .when('/deside', {
                templateUrl: 'templates/deside.html',
                controller: 'DesideCtrl'
            })
            .when('/deside/:redirect', {
                templateUrl: 'templates/deside.html',
                controller: 'DesideCtrl'
            })
            .when('/login', {
                templateUrl: 'templates/login.html',
                controller: 'LoginCtrl'
            })
            .when('/main', {
                templateUrl: 'templates/main.html',
                controller: 'MainCtrl'
            })
            .when('/users/new', {
                templateUrl: 'templates/new-user.html',
                controller: 'NewUserCtrl'
            })
            .when('/users/:id', {
                templateUrl: 'templates/profile.html',
                controller: 'ProfileCtrl'
            })
            .when('/users/:id/followers', {
                templateUrl: 'templates/followers.html',
                controller: 'FollowersCtrl'
            })
            .when('/users/:id/following', {
                templateUrl: 'templates/following.html',
                controller: 'FollowingCtrl'
            })
            .when('/users/:id/trusts', {
                templateUrl: 'templates/trusts.html',
                controller: 'TrustsCtrl'
            })
            .when('/sales/new', {
                templateUrl: 'templates/new-sale.html',
                controller: 'NewSaleCtrl'
            })
            .when('/sales/search', {
                templateUrl: 'templates/search.html',
                controller: 'SearchCtrl'
            })
            .when('/sales/:id', {
                templateUrl: 'templates/sale.html',
                controller: 'SaleCtrl'
            })
            .when('/page1/:id', {
                templateUrl: 'templates/page1.html',
                controller: 'Page1Ctrl'
            })
            .when('/relatives', {
                templateUrl: 'templates/relatives.html',
                controller: 'RelativesCtrl'
            })
            .otherwise({
                redirectTo: '/deside'
            });

        localStorageServiceProvider.setPrefix('CarPC');
    })
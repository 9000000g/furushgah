angular.module('app', ['theFramework', 'app.services', 'app.directives', 'app.controllers'])
    .config(function($routeProvider, $tfHttpProvider) {
        $routeProvider
            .when('/', {
                redirectTo: '/sales/search'
            })
            .when('/login', {
                templateUrl: 'templates/login.html',
                controller: 'LoginCtrl'
            })
            .when('/sales/search/:filters?/:title?', {
                templateUrl: 'templates/sales.html',
                controller: 'SalesCtrl'
            })
            .when('/search', {
                templateUrl: 'templates/search.html',
                controller: 'SearchCtrl'
            })
            .when('/users/new', {
                templateUrl: 'templates/new-user.html',
                controller: 'NewUserCtrl'
            })
            .when('/users/:id', {
                templateUrl: 'templates/profile.html',
                controller: 'ProfileCtrl'
            })
            .when('/users/:id/list', {
                templateUrl: 'templates/list.html',
                controller: 'ListCtrl'
            })
            .when('/sales/new', {
                templateUrl: 'templates/new-sale.html',
                controller: 'NewSaleCtrl'
            })
            .when('/sales/:id', {
                templateUrl: 'templates/sale.html',
                controller: 'SaleCtrl'
            })
            .otherwise({
                redirectTo: '/sales/search'
            });
        //$locationProvider.html5Mode(true);
        $tfHttpProvider.address = serverConfig.address + ':' + serverConfig.port;
        $tfHttpProvider.sid = _sid;
    })
angular.module('app', ['theFramework', 'app.services', 'app.directives', 'app.controllers'])
    .config(function($routeProvider, $tfHttpProvider) {
        $routeProvider
            .when('/login', {
                templateUrl: 'templates/login.html',
                controller: 'LoginCtrl'
            })
            .when('/sales/search/:filters?/:title?', {
                templateUrl: 'templates/main.html',
                controller: 'MainCtrl'
            })
            .when('/search', {
                templateUrl: 'templates/search.html',
                controller: 'SearchCtrl'
            })
            .when('/main', {
                templateUrl: 'templates/main.html',
                controller: 'MainCtrl'
            })
            .when('/main/user/:user', {
                templateUrl: 'templates/main.html',
                controller: 'MainCtrl'
            })
            .when('/main/text/:text/timeline/:timeline', {
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
            .when('/page1/:id', {
                templateUrl: 'templates/page1.html',
                controller: 'Page1Ctrl'
            })
            .when('/relatives', {
                templateUrl: 'templates/relatives.html',
                controller: 'RelativesCtrl'
            })
            .otherwise({
                redirectTo: '/sales/search'
            });
        $tfHttpProvider.address = serverConfig.address + ':' + serverConfig.port;
        $tfHttpProvider.sid = _sid;
    })
angular.module('app', ['ngNaiFramework', 'app.services', 'app.controllers'])
.config(function($routeProvider, localStorageServiceProvider) {
	$routeProvider
	.when('/deside', {
		template: '',
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
	.when('/timeline', {
		templateUrl: 'templates/timeline.html',
		controller: 'TimelineCtrl'
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
		redirectTo: '/deside'
	});
	
	localStorageServiceProvider.setPrefix('CarPC');
})
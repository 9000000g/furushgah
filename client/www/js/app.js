angular.module('app', ['ngNaiFramework', 'app.services', 'app.controllers'])
.config(function($routeProvider, localStorageServiceProvider) {
	$routeProvider
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
	.when('/page1/:id', {
		templateUrl: 'templates/page1.html',
		controller: 'Page1Ctrl'
	})
	.when('/relatives', {
		templateUrl: 'templates/relatives.html',
		controller: 'RelativesCtrl'
	})
	.otherwise({
		redirectTo: '/login'
	});
	
	localStorageServiceProvider.setPrefix('CarPC');
})

var app = angular.module('alice', ['ngRoute']);

app.config(function($routeProvider) {
	$routeProvider
    .when('/welcome', {
		templateUrl: 'templates/welcome.html',
		controller: 'WelcomeCtrl as ctrl',
	})
	.when('/home', {
		templateUrl: 'templates/home.html',
		controller: 'HomeCtrl as ctrl'
	})
    .when('/about', {
		templateUrl: 'templates/about.html',
		controller: 'AboutCtrl as ctrl'
	})
	.when('/fashion-projects', {
		templateUrl: 'templates/fashion.html',
		controller: 'FashionCtrl as ctrl'
	})
	.when('/photography', {
		templateUrl: 'templates/photography.html',
		controller: 'OtherWorkCtrl as ctrl'
	})
    .when('/artworks', {
		templateUrl: 'templates/artworks.html',
		controller: 'OtherWorkCtrl as ctrl'
	})
	// .when('/fashion/:projectId', {
	// 	templateUrl: 'templates/project.html',
	// 	controller: 'ProjectCtrl as ctrl'
	// })
	.otherwise({
		redirectTo: '/home'
	});
});

$(document).ready(function() {
}
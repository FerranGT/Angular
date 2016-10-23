angular.module("myApp", ['ngRoute'])
	.config( function($routeProvider) {

			$routeProvider
				.when('/', {
					templateUrl: 'views/home.html',
					controller: 'homeController'
				})
				.when('/about', {
					templateUrl: 'views/about.html',
					controller: 'aboutController'
				})
				.when('/contact', {
					templateUrl: 'views/contact.html',
					controller: 'contactController'
				})
				.otherwise({redirectTo: '/'});

	})


// configure our routes
// angular.module('routingApp').config(function($routeProvider) {
// 	$routeProvider
// 		// route for the home page
// 		.when('/', {
// 			templateUrl : 'templates/home.html',
// 			controller  : 'HomeController'
// 		})
// 		// route for the about page
// 		.when('/about', {
// 			templateUrl : 'templates/about.html',
// 			controller  : 'AboutController'
// 		})
// 		// route for the contact page
// 		.when('/contact', {
// 			templateUrl : 'templates/contact.html',
// 			controller  : 'ContactController'
// 		})
// 		.when('/details/:page', {
// 			templateUrl : 'templates/details.html',
// 			controller : 'DetailsController'
// 		})
// 		.otherwise({redirectTo: '/'}); ;
// });


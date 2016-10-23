angular.module("myApp", ['ngRoute','myControllers'])
	.config( function($routeProvider) {

			$routeProvider
				.when('/', {
					templateUrl: 'views/popular.html',
					controller: 'popularController'
				})
				.when('/upcoming', {
					templateUrl: 'views/upcoming.html',
					controller: 'upcomingController'
				})
				.when('/nowplaying', {
					templateUrl: 'views/nowplaying.html',
					controller: 'nowplayingController'
				})
				.when('/toprated', {
					templateUrl: 'views/toprated.html',
					controller: 'topratedController'
				})
				.otherwise({redirectTo: '/'});

	})




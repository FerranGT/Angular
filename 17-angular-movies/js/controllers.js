
angular.module("myControllers",['myServices'])

	.controller("popularController", function($scope, $rootScope, moviedbservice) {
		$rootScope.activetab = 'popular';
		$scope.findPopular = function() {
			moviedbservice.getPopular()
				.then( function(response) {
					//console.log(response);
					$rootScope.Populars = response.data.results;
				})
		}
		$scope.findPopular(); //Llamo a la funcion para que haga la peticion getPopular

		$scope.searchMoviesPopular = function($event){
			event.preventDefault();
			$scope.searchmoviebutton = $scope.searchmovie;
		}
	})

	.controller("upcomingController", function($scope, $rootScope, moviedbservice) {
		$rootScope.activetab = 'upcoming';
		$scope.findUpcoming = function() {
			moviedbservice.getUpcoming()
			.then( function(response) {
				//console.log(response);
				$rootScope.Upcomings = response.data.results;
			})
		}
		$scope.findUpcoming();

		$scope.searchMoviesUpcoming = function($event){
			event.preventDefault();
			$scope.searchmoviebutton = $scope.searchmovie;
		}
	})

	.controller("nowplayingController", function($scope, $rootScope, moviedbservice) {
		$rootScope.activetab = 'nowplaying';
		$scope.findNowPlaying = function() {
			moviedbservice.getNowPlaying()
				.then( function(response) {
					console.log(response);
					$rootScope.NowPlayings = response.data.results;
				})
		}
		$scope.findNowPlaying();

		$scope.searchMoviesNowPlaying = function($event){
			event.preventDefault();
			$scope.searchmoviebutton = $scope.searchmovie;
		}
	})

	.controller("topratedController", function($scope, $rootScope, moviedbservice) {
		$rootScope.activetab = 'toprated';
		$scope.findtopRatedPlaying = function() {
			moviedbservice.gettopRatedlaying()
				.then( function(response) {
					console.log(response);
					$rootScope.topRatedPlayings = response.data.results;
				})
		}
		$scope.findtopRatedPlaying();

		$scope.searchMoviesTopRated = function($event){
			event.preventDefault();
			$scope.searchmoviebutton = $scope.searchmovie;
		}
	})






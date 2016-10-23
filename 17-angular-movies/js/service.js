angular.module('myServices', [])
	.factory("moviedbservice", function($http) {

			function getPopular() {
				return $http.get("https://api.themoviedb.org/3/movie/popular?api_key=7fa3b4021297cac7bbe4147df3c086b5&language=en-US");
			}

			function getUpcoming() {
				return $http.get("https://api.themoviedb.org/3/movie/upcoming?api_key=7fa3b4021297cac7bbe4147df3c086b5&language=en-US");
			}

			function getNowPlaying() {
				return $http.get("https://api.themoviedb.org/3/movie/now_playing?api_key=7fa3b4021297cac7bbe4147df3c086b5&language=en-US");
			}

			function gettopRatedlaying() {
				return $http.get("https://api.themoviedb.org/3/movie/top_rated?api_key=7fa3b4021297cac7bbe4147df3c086b5&language=en-US");
			}

			return {
				getPopular: getPopular,
				getUpcoming: getUpcoming,
				getNowPlaying: getNowPlaying,
				gettopRatedlaying: gettopRatedlaying
			}
	})

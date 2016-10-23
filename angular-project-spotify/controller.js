angular.module('myApp')
.controller('myController', function($scope, spotifyService) {

	$scope.title = "SpotiFinder 🎶 😎"

	$scope.findArtists = function(e) {
		e.preventDefault();
		spotifyService.getArtists($scope.artistQuery)
		.then( function(response) {
			//console.log(response);
			$scope.artists = response.data.artists.items;
		})
	}

	$scope.findAlbums = function() {
		console.log("looking for artists....")
		spotifyService.getAlbums($scope.idArtist)
		.then( function(response) {
			console.log(response);
			$scope.albums = response.data.items;
		} )
	}

	$scope.findSongs = function() {
		console.log("looking for songs....")
		console.log($scope.idAlbum);
			$scope.albumImg=$scope.idAlbum.split('|')[1];//me faltaba esto
		spotifyService.getTracks($scope.idAlbum.split('|')[0])
		.then( function(response) {
			//console.log(response);
			$scope.songs = response.data.items;

		} )
	}

})
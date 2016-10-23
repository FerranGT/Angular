angular.module('myApp')
	.controller('myController1', function($scope, $rootScope) {

		$scope.getnumber = function(e) {
			e.preventDefault();
			$rootScope.result = $scope.number1 / 100 * $scope.number2;
		}

	})
	.controller('myController2', function($scope, $rootScope) {

		$scope.getnumber = function(e) {
			e.preventDefault();
			$rootScope.result2 = $scope.number3 / $scope.number4 * 100;
		}

	})
	.controller('myController3', function($scope, $rootScope) {

		$scope.getnumber = function(e) {
			e.preventDefault();
			$rootScope.result3 = ($scope.number6 - $scope.number5) / $scope.number5  * 100;
		}
	
	})
	.controller('myController4', function($scope, $rootScope) {

		$scope.makereset = function(e) {
			e.preventDefault();
			$rootScope.result = " ";
			$rootScope.result2 = " ";
			$rootScope.result3 = " ";
		}
	
	})

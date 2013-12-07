
require.config({
	paths: {
		"angular": "vendor/angular/angular",
		"angular-routes": "vendor/angular/angular-routes"
	},
	shim: {
		"angular-routes": {
			deps: ["angular"]
		},
		"angular": {
			exports: "angular"
		}
	}
});

require(["angular"], function(angular) {

	var myApp = angular.module('myApp', []);


	myApp.controller('MainCtrl', ['$scope', function ($scope) {
	  // Controller magic
	  $scope.text = 'Hello, Angular fanatic.';
	}]);
});


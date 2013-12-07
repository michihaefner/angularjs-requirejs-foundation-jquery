
require.config({
	paths: {
		"jquery": "vendor/jquery",
		"foundation": "vendor/foundation",
		"angular": "vendor/angular",
		"angular-routes": "vendor/angular-routes"
	},
	shim: {
		"angular-routes": {
			deps: ["angular"]
		},
		"angular": {
			exports: "angular"
		},
		"foundation": {
			deps: ["jquery"]
		}
		
	}
});

/*
require(["jquery", "foundation"], function() {
	console.log("initializing...");
	$(document).ready(function() {
		console.log("Load Foundation...");
		$(document).foundation();
		console.log("Foundation loaded");
	});

	
});
*/
require(["angular"], function(angular) {

	var myApp = angular.module('myApp', []);


	myApp.controller('MainCtrl', ['$scope', function ($scope) {
	  // Controller magic
	  $scope.text = 'Hello, Angular fanatic.';
	}]);
});





require.config({
	paths: {
		"jquery": "vendor/jquery1.10.2",
		"jquery-private": "vendor/jquery-private",
		"angular": "vendor/angular/angular",
		"angular-routes": "vendor/angular/angular-routes",
		"test-plugin": "vendor/test-plugin",
		"foundation-base": "vendor/foundation/foundation",
		"foundation": "vendor/foundation-private"
	},
	shim: {
		/*
		"angular-routes": {
			deps: ["angular"]
		},
		*/
		"angular": {
			exports: "angular"
		},
		"jquery": {
			exports: "jQuery"
		}
	}
});



require(["jquery", "foundation", "angular"], function($, foundation, angular) {
	$(document).ready(function() {
		var myApp = angular.module('myApp', []);

		myApp.controller('MainCtrl', ['$scope', function ($scope) {
			// Controller magic
			$scope.text = 'Hello, Angular fanatic.';
		}]);
	});
	
});
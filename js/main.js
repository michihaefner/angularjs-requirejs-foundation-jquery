
require.config({
	baseUrl: "./js/",
	paths: {
		"jquery": "vendor/jquery1.10.2",
		"angular": "vendor/angular/angular",
		"angular-route": "vendor/angular/angular-route",
		"foundation-base": "vendor/foundation",
		"foundation": "vendor/foundation.loadPlugins", // loads jQuery, FoundationJS and FoundationPlugins
		"app": "angular-app/app"
	},
	shim: {
		"angular-routes": {
			deps: ["angular"]
		},
		"angular": {
			deps: ["foundation"],
			exports: "angular"
		},
		"jquery": {
			exports: "jQuery"
		},
		"foundation-base": {
			exports: "Foundation"
		}
	}
});



require(["app"], function() {
	console.log(Foundation);
	console.log(angular);
});
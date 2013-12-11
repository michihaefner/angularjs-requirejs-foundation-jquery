require([
    'jquery',
    'angular',
    'angular-route',
    'loadControllers',
    'loadDirectives',
    'loadFilters',
    'loadServices'
], function ($, angular) {
    'use strict';
    console.log("loading App...");
    $(document).ready(function() {
        angular.module('ngApp', [
            'ngApp.controllers',
            'ngApp.directives',
            'ngApp.filters',
            'ngApp.services',
            'ngRoute'
        ]);
        angular.bootstrap(document, ['ngApp']);
        console.log("App loaded");
    });
    
    
});
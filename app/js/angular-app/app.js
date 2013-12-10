define([
    'jquery',
    'angular',
    'angular-route',
    'loadControllers',
    'loadDirectives',
    'loadFilters',
    'loadServices'
], function ($, angular) {
    'use strict';

    $(document).ready(function() {
        angular.module('ngApp', [
            'ngApp.controllers',
            'ngApp.directives',
            'ngApp.filters',
            'ngApp.services',
            'ngRoute'
        ]);
        console.log("App loaded");
    });
    
    
});
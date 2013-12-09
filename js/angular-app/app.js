define([
    'jquery',
    'angular',
    'angular-route',
    './angular-app/controllers/loadControllers',
    './angular-app/directives/loadDirectives',
    './angular-app/filters/loadFilters',
    './angular-app/services/loadServices'
], function ($, angular) {
    'use strict';

    $(document).ready(function() {
        angular.module('app', [
            'app.controllers',
            'app.directives',
            'app.filters',
            'app.services',
            'ngRoute'
        ]);
        console.log("App loaded");
    });
    
    
});
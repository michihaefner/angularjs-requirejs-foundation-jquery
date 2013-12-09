/**
 * Example of a directive
 */
define(['./directives.module'], function (directives) {
    'use strict';
    directives.directive('ExampleDirective', ['version', function (version) {
        return function (scope, elm) {
            elm.text(version);
        };
    }]);
});
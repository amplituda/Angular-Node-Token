'use strict';

/**
 * @ngdoc directive
 * @name psJwtApp.directive:test
 * @description
 * # test
 */
angular.module('psJwtApp')
  .directive('test', function () {
    return {
      template: '<div></div>',
      restrict: 'E',
      link: function postLink(scope, element, attrs) {
        element.text('this is the test directive');
      }
    };
  });

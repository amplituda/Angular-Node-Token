'use strict';

/**
 * @ngdoc directive
 * @name psJwtApp.directive:sameAs
 * @description
 * # sameAs
 */
angular.module('psJwtApp')
	.directive('validateEquals', function() {
		return {
			restrict: 'A',
			require: 'ngModel',
			link: function(scope, element, attrs, ngModelCtrl) {
				function validateEqual(value) {
					var valid = (value === scope.$eval(attrs.validateEquals));

					ngModelCtrl.$setValidity('equal', valid);
					return valid ? value : undefined;
				}

				ngModelCtrl.$parsers.push(validateEqual);
				ngModelCtrl.$formatters.push(validateEqual);

				scope.$watch(attrs.validateEquals, function() {
					ngModelCtrl.$setViewValue(ngModelCtrl.$viewValue);
				});
			}
		};

	});
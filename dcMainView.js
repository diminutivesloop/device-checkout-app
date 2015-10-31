angular.module('dcApp', [])
	.directive('dcMainView', function() {
		return {
			restrict: 'E',
			templateUrl: 'dcMainView.html'
		};
	});

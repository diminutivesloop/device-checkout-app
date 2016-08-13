angular.module('dcApp')
	.directive('dcAddDeviceView', function($templateCache) {
		return {
			restrict: 'E',
			template: $templateCache.get('app/dcAddDeviceView.html'),
			controller: 'dcAddDeviceViewController',
			controllerAs: 'vm',
			scope: {}
		};
	})
	.controller('dcAddDeviceViewController', function(dcModelService) {
		
	});

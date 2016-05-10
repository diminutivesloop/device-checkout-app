angular.module('dcApp')
	.directive('dcDeviceList', function($templateCache) {
		return {
			restrict: 'E',
			template: $templateCache.get('app/dcDeviceList.html'),
			controller: 'dcDeviceListController',
			controllerAs: 'vm',
			scope: {}
		};
	})
	.controller('dcDeviceListController', function(dcModelService) {
		this.getDevices = function() {
			return dcModelService.getDevices();
		};
	});

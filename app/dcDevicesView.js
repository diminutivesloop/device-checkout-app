angular.module('dcApp')
	.directive('dcDevicesView', function($templateCache) {
		return {
			restrict: 'E',
			template: $templateCache.get('app/dcDevicesView.html'),
			controller: 'dcDevicesViewController',
			controllerAs: 'vm',
			scope: {}
		};
	})
	.controller('dcDevicesViewController', function(dcModelService, $location) {
		this.getDevices = function() {
			return dcModelService.getDevices();
		};

		this.addButtonClicked = function() {
			$location.url('/devices/add');
		};
	});

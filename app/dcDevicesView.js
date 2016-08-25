angular.module('dcApp')
	.directive('dcDevicesView', function dcDevicesView($templateCache) {
		return {
			restrict: 'E',
			template: $templateCache.get('app/dcDevicesView.html'),
			controller: 'dcDevicesViewController',
			controllerAs: 'vm',
			scope: {}
		};
	})
	.controller('dcDevicesViewController', function dcDevicesViewController(dcModelService, $location) {
		this.getDevices = function() {
			return dcModelService.getDevices();
		};

		this.addButtonClicked = function() {
			$location.url('/devices/add');
		};
	});

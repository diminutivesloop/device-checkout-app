angular.module('dcApp')
	.directive('dcEditDevicesView', function($templateCache) {
		return {
			restrict: 'E',
			template: $templateCache.get('app/dcEditDevicesView.html'),
			controller: 'dcEditDevicesViewController',
			controllerAs: 'vm',
			scope: {}
		};
	})
	.controller('dcEditDevicesViewController', function(dcModelService) {
		this.newDeviceName = '';

		this.isAddButtonDisabled = function() {
			return this.newDeviceName.length == 0;
		};

		this.addButtonClicked = function() {
			dcModelService.createDevice(this.newDeviceName);
			this.newDeviceName = '';
		};

		this.getDevices = function() {
			return dcModelService.getDevices();
		};
	});

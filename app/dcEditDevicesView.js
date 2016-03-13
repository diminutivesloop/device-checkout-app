angular.module('dcApp')
	.directive('dcEditDevicesView', function() {
		return {
			restrict: 'E',
			templateUrl: 'app/dcEditDevicesView.html',
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

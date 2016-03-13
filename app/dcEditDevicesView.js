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
		var counter = 0;

		this.addButtonClicked = function() {
			dcModelService.createDevice('device ' + counter);
			counter++;
		}

		this.getDevices = function() {
			return dcModelService.getDevices();
		}
	});

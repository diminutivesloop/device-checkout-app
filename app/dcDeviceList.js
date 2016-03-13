angular.module('dcApp')
	.directive('dcDeviceList', function() {
		return {
			restrict: 'E',
			templateUrl: 'app/dcDeviceList.html',
			controller: 'dcDeviceListController',
			controllerAs: 'vm',
			scope: {}
		};
	})
	.controller('dcDeviceListController', function(dcModelService) {
		var counter = 0;

		this.addButtonClicked = function() {
			dcModelService.createDevice('device ' + counter);
			counter++;
		}

		this.getDevices = function() {
			return dcModelService.getDevices();
		}
	});

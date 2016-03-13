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
		this.getDevices = function() {
			return dcModelService.getDevices();
		}
	});

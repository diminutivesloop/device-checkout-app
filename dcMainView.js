angular.module('dcApp', [])
	.directive('dcMainView', function() {
		return {
			restrict: 'E',
			templateUrl: 'dcMainView.html',
			controller: 'dcMainViewController',
			controllerAs: 'vm',
			scope: {}
		};
	})
	.controller('dcMainViewController', function(dcModelService) {
		var counter = 0;

		this.addButtonClicked = function() {
			dcModelService.createDevice('device ' + counter);
			counter++;
		}

		this.getDevices = function() {
			return dcModelService.getDevices();
		}
	});

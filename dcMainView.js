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
	.controller('dcMainViewController', function() {
		var devices = [];
		var counter = 0;

		this.addButtonClicked = function() {
			devices.push({name: 'device ' + counter});
			counter++;
		}

		this.getDevices = function() {
			return devices;
		}
	});

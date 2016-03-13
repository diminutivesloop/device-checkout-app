angular.module('dcApp')
	.directive('dcMainView', function() {
		return {
			restrict: 'E',
			templateUrl: 'app/dcMainView.html',
			controller: 'dcMainViewController',
			controllerAs: 'vm',
			scope: {}
		};
	})
	.controller('dcMainViewController', function() {
		var isEditModeActive = false;

		this.editButtonClicked = function() {
			isEditModeActive = true;
		}

		this.doneButtonClicked = function() {
			isEditModeActive = false;
		}

		this.isEditModeActive = function() {
			return isEditModeActive;
		}
	});

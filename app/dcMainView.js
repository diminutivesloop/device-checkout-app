angular.module('dcApp')
	.directive('dcMainView', function($templateCache) {
		return {
			restrict: 'E',
			template: $templateCache.get('app/dcMainView.html'),
			controller: 'dcMainViewController',
			controllerAs: 'vm',
			scope: {}
		};
	})
	.controller('dcMainViewController', function() {
		var isEditModeActive = false;

		this.editButtonClicked = function() {
			isEditModeActive = true;
		};

		this.doneButtonClicked = function() {
			isEditModeActive = false;
		};

		this.isEditModeActive = function() {
			return isEditModeActive;
		};
	});

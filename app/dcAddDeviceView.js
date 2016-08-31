angular.module('dcApp')
.directive('dcAddDeviceView', function dcAddDeviceView($templateCache) {
    return {
        restrict: 'E',
        template: $templateCache.get('app/dcAddDeviceView.html'),
        controller: 'dcAddDeviceViewController',
        controllerAs: 'vm',
        scope: {}
    };
})
.controller('dcAddDeviceViewController', function dcAddDeviceViewController(dcModelService, $location) {
    this.nameFieldText = "";

    this.saveButtonClicked = function() {
        dcModelService.createDevice(this.nameFieldText);
        $location.url('/');
    };

    this.cancelButtonClicked = function() {
        $location.url('/');
    };
});

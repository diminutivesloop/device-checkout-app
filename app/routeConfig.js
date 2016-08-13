angular.module('dcApp').config(function($routeProvider, $locationProvider) {
    $routeProvider
    .when('/devices', {
        template: "<dc-devices-view></dc-devices-view>"
    }).when('/devices/add', {
        template: "<dc-add-device-view></dc-add-device-view>"
    })
    .otherwise('/devices');

    $locationProvider.html5Mode(true);
});

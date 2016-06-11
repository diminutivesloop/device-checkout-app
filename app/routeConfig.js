angular.module('dcApp').config(function($routeProvider, $locationProvider) {
    $routeProvider
    .when('/devices', {
        template: "<dc-devices-view></dc-devices-view>"
    })
    .otherwise('/devices');

    $locationProvider.html5Mode(true);
});

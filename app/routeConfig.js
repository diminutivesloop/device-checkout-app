angular.module('dcApp').config(function($routeProvider, $locationProvider) {
    $routeProvider
    .when('/devices', {
        template: "<dc-device-list></dc-device-list>"
    })
    .otherwise('/devices');

    $locationProvider.html5Mode(true);
});

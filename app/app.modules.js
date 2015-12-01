var dcMainView = require('./dcMainView.js');
var dataService = require('./dataService.js');

module.exports = angular.module('dcApp', [])
	.service('dataService', dataService)
	.directive('dcMainView', dcMainView);
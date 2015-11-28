var dcMainView = require('./dcMainView.js');
var dataService = require('./dataService.js');

module.exports = angular.module('dcApp', [])
	.service('dataService', ['$rootScope', dataService])
	.directive('dcMainView', ['dataService', dcMainView]);
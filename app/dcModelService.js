angular.module('dcApp').service('dcModelService', function dcModelService() {
	var devices = [];

	this.createDevice = function(name) {
		devices.push({
			name: name
		});
	}

	this.getDevices = function() {
		return devices;
	}
});

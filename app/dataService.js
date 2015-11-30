module.exports = function($rootScope) {
	var dataService = this;
	var ref = new Firebase('https://brilliant-heat-1213.firebaseio.com/');
	var devicesRef = ref.child('devices');
	var devices = [];

	devicesRef.on('child_added', function(snapshot) {
		if(snapshot.val()) {
			devices.push(snapshot.val());
			if(!$rootScope.$$phase) {
				$rootScope.$apply();
			}
		}
	});

	dataService.addDevice = function(name) {
		devicesRef.push({'name': name}, function(error) {
			if(error) {
				console.log('Error uploading data', error);
			}
		});
	};

	dataService.getDevices = function() {
		return devices;
	};
}
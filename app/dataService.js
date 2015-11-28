module.exports = function($rootScope) {
	var dataService = this;
	var ref = new Firebase('https://brilliant-heat-1213.firebaseio.com/');
	var devicesRef = ref.child('devices');
	var devices = [];
	var deviceCounter = 0;

	devicesRef.on('child_added', function(snapshot) {
		if(snapshot.val()) {
			devices.push(snapshot.val());
			if(!$rootScope.$$phase) {
				$rootScope.$apply();
			}
		}
	});

	dataService.addDevice = function(name) {
		devicesRef.push({'name': name + '-' + deviceCounter}, function(error) {
			if(error) {
				console.log('Error uploading data');
			} else {
				deviceCounter++;
			}
		});
	};

	dataService.getDevices = function() {
		return devices;
	};
}
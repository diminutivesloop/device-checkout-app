module.exports = function(dataService) {
	function dcMainViewController() {
		this.addButtonClicked = function() {
			dataService.addDevice('DeviceName');
		}

		this.getDevices = function() {
			return dataService.getDevices();
		}
	}
	return {
		restrict: 'E',
		template: [`<button ng-click='vm.addButtonClicked()'>Add</button>`,
		`<table ng-repeat='device in vm.getDevices()'>`,
			`<tr>`,
				`<td>{{ device.name }}</td>`,
			`</tr>`,
		`</table>`].join(''),
		controller: dcMainViewController,
		controllerAs: 'vm',
		scope: {}
	};
};


	
function dcMainView(dataService) {
	function dcMainViewController() {
		var vm = this;
		vm.deviceName = '';
		vm.addButtonClicked = function() {
			dataService.addDevice(vm.deviceName);
		}

		vm.getDevices = function() {
			return dataService.getDevices();
		}
	}
	return {
		restrict: 'E',
		template: `<input ng-model="vm.deviceName"></input>
		<button ng-click="vm.addButtonClicked()">Add</button>
		<table ng-repeat="device in vm.getDevices()">
			<tr>
				<td>{{ device.name }}</td>
			</tr>
		</table>`,
		controller: dcMainViewController,
		controllerAs: 'vm',
		scope: {}
	};
};

dcMainView.$inject = ['dataService'];

module.exports = dcMainView;
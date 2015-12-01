require('angular');
require('firebase');

var dcAppModule = require('./app.modules.js');

document.write(require('./index.html'));

angular.element(document).ready(function() {
	angular.bootstrap(document, [dcAppModule.name])
});
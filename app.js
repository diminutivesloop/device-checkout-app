var express = require('express');
var app = express();

// app.use(express.static('deploy/'));
app.get('*', function(req, res) {
  res.sendFile('index.html', {root: __dirname + '/deploy/'});
});

var server = app.listen(3000, function() {
	var host = server.address().address;
	var port = server.address().port;

	console.log('App listening on http://localhost:' + port);
});

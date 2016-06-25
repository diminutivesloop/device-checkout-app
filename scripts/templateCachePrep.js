var templatecache = require('ng-templatecache');
var fs = require('fs');
var glob = require('glob');
var templateArray = [];

//Find all files under the specified directory
glob.sync(process.argv[2] + '**').forEach(function(path, index) {
  //Is the file extension html but not index.html
	if(path.indexOf('.html') != -1 && path.indexOf('index.html') === -1) {
		var contents = fs.readFileSync(path, 'utf8');
		templateArray.push({content: contents, path: path})
	}
});

var output = templatecache({
  entries: templateArray,
  module: 'dcApp',
  standalone: false
});

fs.writeFile("temp/templateCacheModule.js", output, function(err) {
    if(err) {
        return console.log(err);
    }
}); 
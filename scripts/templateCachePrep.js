var templatecache = require('ng-templatecache');
var fs = require('fs');
var templateArray = [];

process.argv.slice(2).forEach(function(path, index) {
	var contents = fs.readFileSync(path, 'utf8');
	templateArray.push({content: contents, path: path})
})

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
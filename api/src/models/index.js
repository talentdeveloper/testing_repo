var path = require('path');
var fs = require('fs');

fs.readdirSync(__dirname).forEach(function (file) {
	if (file === 'index.js') return;
	require(path.join(__dirname, file));
});
#!/usr/bin/env node

var program = require('commander');
var fs = require('fs');
 
function addModule(val){
	fs.readFile('../data/templates/route.js', 'utf8', function (err,data) {
		if (err) {
			return console.log(err);
		}
		var name = val.toLowerCase();
		var file_name = val.toLowerCase() + '.js';
		var cap_name = val.replace(/\w\S*/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});
		
		var fdata = data.replace(/NAME/ig, name);
		
		fs.writeFile('../src/routes/' + file_name, fdata, function (err) {
			if (err){ 
				return console.log(err);
			}
			console.log(cap_name + ' Route Created');
		});
	});
	
	fs.readFile('../data/templates/controller.js', 'utf8', function (err,data) {
		if (err) {
			return console.log(err);
		}
		var name = val.toLowerCase();
		var file_name = val.toLowerCase() + '.js';
		var cap_name = val.replace(/\w\S*/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});
		
		var fdata = data.replace(/cap_name/g, cap_name);
		
		fs.writeFile('../src/controllers/' + file_name, fdata, function (err) {
			if (err){ 
				return console.log(err);
			}
			console.log(cap_name + ' Controller Created');
		});
	});
	
	fs.readFile('../data/templates/model.js', 'utf8', function (err,data) {
		if (err) {
			return console.log(err);
		}
		var name = val.toLowerCase();
		var file_name = val.toLowerCase() + '.js';
		var cap_name = val.replace(/\w\S*/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});
		
		var fdata = data.replace(/cap_name/g, cap_name);
		
		if(fdata){
			fs.writeFile('../src/models/' + file_name, fdata, function (err) {
				if (err){ 
					return console.log(err);
				}
				console.log(cap_name + ' Model Created');
			});
		}
	});
}

program
  .version('0.0.1')
  .option('-m, --module <n>', 'Add Module', addModule)
  .parse(process.argv);
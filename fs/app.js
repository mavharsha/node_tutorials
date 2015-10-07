var fs = require('fs');
require('colors');
fs.readFile('mytext.txt', function(error, data){

	if (error) throw error;
	console.log("Helloooo".rainbow);

});

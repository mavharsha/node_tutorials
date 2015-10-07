// create an express app
var express = require('express');
var app = express();

app.use(function(request, response){
	
	response.writeHead(200,{'Content-type':'text/html'});
	response.write('Hello, World. From Express.');
	response.end();

});

app.listen(8000);

console.log('Server is up and running on port 8000');

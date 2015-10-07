var express = require('express'),
	morgan = require('morgan'),
	app = express(),
	testMode = false;
	
// adding logging middleware to log each request
app.use(morgan('dev'));

// add middleware to check if to switch on the testMode
app.use(function(req, res, next){

	if(req.url == '/test'){
	console.log("enabling test mode");
	testMode=true;
	}
	
	next();
});

// add  middleware to always send a 'hello, world' response

app.use(function(req, res){

	var data = testMode ?  JSON.stringify(req.headers) : '<h1>Hello, World!</h1>';
	var contentType = testMode ? 'text/plain' : 'text/html';
	
	res.writeHead(200, {'Content-Type':contentType});
	res.write(data);
	res.end();

}).listen(8000);

console.log("Server is up and running at http://localhost:8000");
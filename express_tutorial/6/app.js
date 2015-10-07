var express = require('express'),
    morgan = require('morgan')
    app = express();

app.use(morgan('dev'));

app.get('/', function(req, res){

	res.send("<H1> Hello, World!</H1>");

});

app.get('/harsha', function(req, res){

	res.send("<H1>Harsha</H1>");

});

var server = app.listen(8000, '127.0.0.1', function(){
	var host = server.address();
	console.log("Server is started on %s:%s", host,server.address().port);
});

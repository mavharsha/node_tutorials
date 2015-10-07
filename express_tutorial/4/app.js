var express = require('express'),
	morgan = require('morgan');
var app = express();
app.use(morgan('dev'));

app.get('/', function(req, res){

	res.send("<H1>Sree Harsha!</H1>");

});

app.listen(8000);

console.log("Server started on http://localhost:8000");
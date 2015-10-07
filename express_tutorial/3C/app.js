var express = require('express'),
	morgan = require('morgan'),
	app = express();

var publicDir = require('path').join(__dirname, 'public/');	
app.use(morgan('dev'));

// add the express.static middleware to the app to serve files in the
// in the specified path. This middleware will only call the next
// middleware if the path doesn't match the static directory
app.use(express.static(publicDir));

// express middleware to handle remaining requests for non-static files
app.use(function(req, res){
  res.writeHead(200, { 'Content-Type': 'text/html' });
  res.write('<h1>Nothing here for you...</h1>');
  res.end();
});
app.listen(8000);

console.log("server started on http://localhost:8000");

var http = require('http');

var s = http.createServer(function(req, res){

	res.writeHead(200, {'content-type':'text/plain'});
	res.write("Hello");
	setTimeout(function(){
	res.end("Ryan");
	}, 2000);

});
s.listen(8000);

console.log("Server at localhost:8000");

var server = require('http'),
 url = require('url');

 server.createServer(function(req, res){
 
 var pathname = url.parse(req.url).pathname;
 console.log("The Request for "+ pathname+" recieved");
 res.writeHead(200,{'Content-Type':'text/html'});
 res.write("Hello, World");
 res.end();
 
 }).listen(8000);

 console.log("Server up and running at localhost:8000");

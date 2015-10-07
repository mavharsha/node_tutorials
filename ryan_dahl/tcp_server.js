var net = require('net')

var server = net.createServer(function(socket){

	socket.write('hello');
	socket.end('world');

});

server.listen(8000);

var express = require('express');
var router =  express.Router();

router.use(function(request, response, next){
	console.log("Time", Date.now());
	next();
});

router.get('/', function(request, response){
	response.send("Home Page!");
});

router.get('/about/:id', function(request, response){
	response.send("About Page! Usernumber"+ request.params.id);
});

router.post('/about', function(request, response){
	response.send("About page! Username "+ request.body.name + " from post");
});

module.exports = router;

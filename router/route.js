var express = require('express');
var router =  express.Router();

router.use(function(request, response, next){
	console.log("Time", Date.now());
	next();
});

router.get('/', function(request, response){
	response.send("Home Page!");
});

router.get('/about', function(request, response){
	response.send("About Page!");
});

module.exports = router;

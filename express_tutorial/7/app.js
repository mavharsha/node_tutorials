var app = require('express')(),
    morgan = require('morgan');

app.use(morgan('dev'));

app.get('/',function(req, res){

	res.send("<H1>Home page</H1>");

});

app.get('/about', function(req, res){

	res.send("<H1>About page</H1>");
});
console.log("Listening at port 8000");
app.listen(8000);

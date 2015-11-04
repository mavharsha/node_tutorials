var router = require('./route');
var bodyParser = require('body-parser');
var app = require('express')();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use('/', router);

app.listen(9090);


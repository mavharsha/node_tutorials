var MongoClient = require('mongodb').MongoClient;

MongoClient.connect('mongodb://127.0.0.1:27017/names', function(err, db){

	if (err) throw err;
	
	db.collection('mynames').findOne({}, function(err, doc){
		if (err) throw err;
		
		console.dir(doc);
		console.log("Connected");
		db.close();
	});
});

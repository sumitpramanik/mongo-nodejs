var mongo = require('mongodb');
var MongoClient = mongo.MongoClient;
var url = 'mongodb://127.0.0.1:27017/';

MongoClient.connect(url, function(err, db) {
    if(err) throw err;
    var dbo = db.db('mydb');
    //drop database
    dbo.collection('customers').drop(function(err,delOK) {
        if(err) throw err;
        if(delOK) console.log("Collection dropped");
        db.close();
    });
});
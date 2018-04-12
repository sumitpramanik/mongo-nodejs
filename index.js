var mongo = require('mongodb');
var MongoClient = mongo.MongoClient;
var url = 'mongodb://127.0.0.1:27017/';

MongoClient.connect(url, function(err, db) {
    if(err) throw err;
    var dbo = db.db("mydb");
    /*dbo.createCollection("customers", function(err,res) {
        if(err) throw err;
        console.log("Collection created");
        var myObj = {name : "Company 1", address:"Highway 37"};
        dbo.collection('customers').insertOne(myObj, function(err,res) {
            if(err) throw err;
            console.log("record inserted");
            var query = {name:"Company 1"}
            dbo.collection('customers').deleteOne(query,function(err, result) {
                if(err) throw err;
                console.log(result.deletedCount);
                db.close();
            });
        });
    });*/
    var query = {name:"Company 2"};
    dbo.collection('customers').deleteMany(query, function(err,result) {
        if(err) throw err;
        console.log(result.deletedCount);
        db.close();
    })
});
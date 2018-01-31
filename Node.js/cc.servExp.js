'use strict';


var mongoClient = require('mongodb').MongoClient;

var url = 'mongodb://localhost:27017';
let cuisine = 'Pizza';

mongoClient.connect(url, function (err, client) {
    let teller = 0;
    var db = client.db('test'); 
    console.log("Connected successfully to server");
    var collection = db.collection('restos');

    collection.find().toArray(function (err, docs) { 
        
        console.log("Restaurant document(s) found:");
        docs.forEach(function (element) {
            console.log('%s. %s (%s), %s',teller, element.name, element.cuisine, element.address ? element.address.street : "");
            teller++;
        });
        client.close();// connectie sluiten weer !! 
    });
});
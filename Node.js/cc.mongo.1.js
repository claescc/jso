'use strict';

var mongoClient = require('mongodb').MongoClient;

var url = 'mongodb://localhost:27017';
var toetsenbord = require('readline-sync');
let cuisine = toetsenbord.question("Geef een cuisine in: ");

mongoClient.connect(url, function (err, client) {
    let teller = 0;
    var db = client.db('test'); 
    console.log("Connected successfully to server");
    var collection = db.collection('restos');
    collection.find({'cuisine': cuisine}).toArray(function (err, docs) { 
        console.log("Restaurant document(s) found:");
        docs.forEach(function (element) {
            console.log('%s. %s (%s), %s',teller, element.name, element.cuisine, element.address ? element.address.street : "");
            teller++;
        });
        client.close();// connectie sluiten weer !! 
    });
});
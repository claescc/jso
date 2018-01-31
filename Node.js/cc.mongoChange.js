'use strict';


var mongoClient = require('mongodb').MongoClient;

var url = 'mongodb://localhost:27017';
let cuisine = 'Pizza';


mongoClient.connect(url, function (err, client) {
    let teller = 0;
    var db = client.db('test');
    console.log("Connected successfully to server");
    var collection = db.collection('restos');

    //ENTER SEARCH CONDITIONS
    // collection.find({'name': 'Wild Asia'}).toArray(function (err, docs) { 
    collection.insertOne({
        name: 'Belkins Paradisio',
        cuisine: 'Bulgarian',
        borough: 'Gent',
        address: {
            street: 'Markt',
            zipcode: '9000'
        }
    }, function (err, docs) {
  //      console.log(docs.ops);
      console.log('New resto: %s te %s Cuisine: %s',docs.ops[0].name, docs.ops[0].borough, docs.ops[0].cuisine);
      console.log('Aantal toegevoegd: %s', docs.insertedCount)
        client.close();// connectie sluiten weer !! 
    });
});



//----------------------------------------------------------------
/*
mongoClient.connect(url, function (err, client) {
    let teller = 0;
    var db = client.db('test');
    console.log("Connected successfully to server");
    var collection = db.collection('restos');
    //ENTER SEARCH CONDITIONS
    // collection.find({'cuisine': 'Peruvian'}).toArray(function (err, docs) { 
    collection.deleteMany({ 'cuisine': 'Chinese' }, function (err, docs) {
        console.log("Restaurant document(s) found:");
        console.log(docs.deletedCount);
    });
    client.close();// connectie sluiten weer !! 
});
*/
//-------------------------------------------------------------------------
/*
mongoClient.connect(url, function (err, client) {
    let teller = 0;
    var db = client.db('test'); 
    console.log("Connected successfully to server");
    var collection = db.collection('restos');

    //ENTER SEARCH CONDITIONS
    //collection.find({'borough': 'unknown'}).toArray(function (err, docs) { 
    collection.updateMany({'borough': 'unknown'},
                  {$set: {'borough': 'unknown'}}).toArray(function (err, docs) { 
        console.log("Restaurant document(s) found:");
        docs.forEach(function (element) {
            console.log('%s. %s (%s), %s',teller, element.name, element.cuisine, element.borough);
            teller++;
        });
        client.close();// connectie sluiten weer !! 
    });
});
*/
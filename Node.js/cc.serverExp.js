//----------------------------------------------------------------------------------
//----------------------------------------------------------------------------------
//                                SERVER SIDE 
//----------------------------------------------------------------------------------
//----------------------------------------------------------------------------------

'use strict'
var express = require('express');
var app = express();

app.all('/*', function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', -'Origin, X-Requested-With, Content-Type, Accept');
    next();
});


// This responds a GET request for the /restaurants page.
app.get('/restos', function (req, res) {
  let data = getAllData(res);
});

// This responds a GET request for the /restaurants page.
app.get('/restos/cuisine', function (req, res) {
    let data = getAllData4(res);
  });

// This responds a GET request for the /restaurants page.
app.get('/restos/:id', function (req, res) {
    let urlid = req.params.id;
    let data = getAllData(res, urlid);
  });

  // This responds a GET request for the /restaurants page.
app.get('/restos/cuisine/:id', function (req, res) {
    let urlid = req.params.id;
    let data = getAllData6(res, urlid);
  });

//---------------------------------------------------------------------------
let mongoClient = require('mongodb').MongoClient;
let url = 'mongodb://localhost:27017';

function getAllData6(res, urlid) {
    mongoClient.connect(url, function (err, client) {
        var db = client.db('test');
        var collection = db.collection('restos');
        collection.find({'cuisine': urlid},
        {'name':1,'address.street':1, 'borough':1, 'cuisine':1, '_id': 0}).toArray(function (err, docs) {
            res.send(JSON.stringify(docs)); // VOOR THE CLOSE 
            client.close();// connectie sluiten weer !! 
        });
    });
};

function getAllData4(res) {
    mongoClient.connect(url, function (err, client) {
        var db = client.db('test');
        var collection = db.collection('restos');
        collection.distinct('cuisine', function (err, docs) {
            res.send(JSON.stringify(docs)); 
            client.close(); 
        });
    });
};

function getAllData(res) {
    mongoClient.connect(url, function (err, client) {
        var db = client.db('test');
        var collection = db.collection('restos');
        collection.find().toArray(function (err, docs) {
            res.send(JSON.stringify(docs)); // vOOR THE CLOSE 
            client.close();// connectie sluiten weer !! 
        });
    });
};


var server = app.listen(8081, function () {
    var host = server.address().address;
    var port = server.address().port;
    console.log("Example app listening at http://%s:%s", host, port);

});
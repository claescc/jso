//----------------------------------------------------------------------------------
//----------------------------------------------------------------------------------
//                                SERVER SIDE 
//----------------------------------------------------------------------------------
//----------------------------------------------------------------------------------

'use strict'
var express = require('express');
var app = express();

let runArray = [{name: 'Chloe',
                surname: 'Claes',
                gender: true, // true = Female
                time: { hours: 1,
                        min: 15}},           
                {name: 'Polka',
                surname: 'Dota',
                gender: true, // true = Female
                time: { hours: 1,
                        min: 25}},
                {name: 'Simon',
                surname: 'Smith',
                gender: false, // false = male
                time: { hours: 1,
                        min: 3}}, 
            ];
/*
app.all('/*', function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', -'Origin, X-Requested-With, Content-Type, Accept');
    next();
});
*/
/*
app.post('/addrun', function(req, res) {
	console.log("post request /addrun");
	runArray.push({name: 'Dirk',
                    surname: 'Gently',
                    gender: false, // false = male
                    time: { hours: 0,
                            min: 55}
	                });
	res.end('{"message" : "Added OK", "status" : 200}');
});

*/

app.get('/runners', function (req, res) {
    res.end(JSON.stringify(runArray));
});

//---------------------------------------------------------------------------
var bodyParser = require('body-parser');
app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true }));

app.post('/addRun', function (req, res) {
    runArray.push(req.body.name, req.body.surname);
//console.log('%s %s wordt toegevoegd', req.body.name, req.body.surname);
res.end('{"message" : "Added OK", "status" : 200}'); 
});



//---------------------------------------------------------------------------
/*
let mongoClient = require('mongodb').MongoClient;
let url = 'mongodb://localhost:27017';

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
*/

var server = app.listen(8081, function () {
    var host = server.address().address;
    var port = server.address().port;
    console.log("Example app listening at http://%s:%s", host, port);

});
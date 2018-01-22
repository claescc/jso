'use strict';
var mysql = require('mysql');
let express = require('express');
var app = express();

// enable cross domain calls (CORS = cross origin resource sharing)
app.all('/*', function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', -'Origin, X-Requested-With, Content-Type, Accept');
    next();
});

app.get('/planten', function (req, res) {

    var connection = mysql.createConnection({ // geef object aan door
        host: 'localhost',
        user: 'root', // claes
        password: 'root',
        database: 'deschop', // database 
        port: 3306 // poort waarop database luistert 
    }); // connectie obj maken !! 

    connection.connect(); // 1st 

    connection.query('SELECT * from planten', function (err, rows, fields) {
        if (!err) {
            var result = JSON.stringify(rows); // maak een string want clients sturen moet string zijn 
            //  console.log(result);
            res.end(result)
        }
        else {
            console.log('Error while performing query.');
        }
        connection.end();
    });

});

var server = app.listen(1337, function () {
    var host = server.address().address;
    var port = server.address().port;
    console.log("Example app listening at http://%s:%s", host, port);
});

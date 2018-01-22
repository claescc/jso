var express = require('express');
var app = express();
var fs = require("fs");
 // geef mij alle users terug (planten)
 // node js readfile !! 
//'utf8'mag weggelaten worden
app.get('/users', function (req, res) {
   fs.readFile( 'bestanden/users.json', 'utf8', function (err, data) {
       console.log( data );
       res.end( data );
   });
});
// :id = request-parameter id is gekozen naam (x)
// 1 object met 3 proerties user 1, 2, 3
app.get('/users/:id', function (req, res) {
   fs.readFile( 'bestanden/users.json', 'utf8', function (err, data) {
       var users = JSON.parse(data);
       var user = users["user"+req.params.id]; // id = nummer 1 
       console.log(user);
       res.end(JSON.stringify(user));
   });
});

var server = app.listen(8081, function () {
  var host = server.address().address;
  var port = server.address().port;
  console.log("Example app listening at http://%s:%s", host, port);
});
'use strict';

let express = require('express');
var app = express();

app.get('/*.html', function (req, res) {
    console.log('here');
res.sendFile(path.join(__dirname + url.parse(req.url).pathname));    
});


var server = app.listen(1338, function () {
    var host = server.address().address;
    var port = server.address().port;
    console.log("Example app listening at http://%s:%s", host, port);
});
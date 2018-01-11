'use strict';

var http = require('http');



http.createServer(function (request, response) {

response.end('begroeting');

}).listen(8081);


// http://127.0.0.1:8081/



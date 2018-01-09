// node JS - CALL BACK FUNCTIES

// fuctie als parameter

var http = require('http');
http.createServer(function handler(req, res) { // MAAK DIE SERVER 
	console.log('request received'); // para 1 = request 
                                    //. para 2 = response nr client
	// Send the HTTP header 
	// HTTP Status: 200 : OK
    res.writeHead(200, {'Content-Type': 'text/plain'}); // functie als parametr
    // writehead = code status + JSON obj  - text 
    
    // Send the response body
    res.end('Hello World\n'); // antwoord afsluiten -> echte antwoord 
    // body response = hello world
}).listen(1337, '127.0.0.1'); // ONEIDIGE LUS OP SERVER START

console.log('Server running at http://127.0.0.1:1337/');

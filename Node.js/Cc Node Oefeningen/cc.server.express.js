'use strict';

let expres = require ('express');
let server = expres();


// get : request method = GET
// path: /hello1.html
server.get('/hello1.html', function (request, response){ // pat url van surfer 
    response.sendFile(__dirname + '/hello1.html'); // als antwoord een file ( pat waar file saved is )
});

// get : request method = GET
// path: randomsite.html ( maar is NIET /hallo1.html)
server.get('/*.html', function (req, res){
    console.log(' req + method GET for html received ');
    res.send(' req met GET for html = processed.')
});

// request method GET
// path: randomstite. doesnt end on html
server.get('/*', function (Q, R){
    console.log('R with method GET not .html');
    R.send('R with GET for non-html pages');
});


// --------- POST ----------------

// request method : POST
// path: is random
server.post('/*', function (Q, R){
    console.log('R with method POST received');
    R.send('R with POST  ok');
});



// ------------------- LAST RESORT VANGNET --------------------------------------

// path eender wat het ook is = /*
// eender welk method  // all = antwoord voor alle http..

server.all('/*', function (req, resp){ // call back funct altijd 2 parameters
    console.log('req received');
    resp.send('hello FOUT server express');
});               

server.listen(8083);
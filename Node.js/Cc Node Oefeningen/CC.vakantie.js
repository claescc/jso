'use strict'

var express = require('express');
var app = express();

// ALTIJD TOEVOEGEN !!
// req.body CREATE !!!!!
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({
    extended: true
}));


// altijd app. 
app.post('/process_post', function (req, res) {
    // Prepare output in JSON format
    let naam = req.body.first_name;		// req.body ipv req.query
    let geslacht = req.body.MV;
    if (geslacht === 'V') {
        geslacht = 'mevrouw'
    } else {
        geslacht = 'meneer'
    }
    let loc = req.body.select;

    let lid = req.body.box;

    if (lid === 'on') {
        lid = 'Als lid geniet u uiteraard van onze uitzonderlijke voorwaarden.';
    } else {
        lid = 'Als NIET lid geniet u NIET van onze uitzonderlijke voorwaarden.';
    }

    let hoofd = '<!DOCTYPE html> <html> <body> <h1> Registratie gelukt <h1>';
    let dag = '<p> Dag ' + geslacht + ' ' + naam + '. </p>';
    let locatie = "<p> Uw inschrijving voor een reis naar De " + loc + " is geregistreerd.</p></body> </html> "


    let message = hoofd + dag + locatie + lid;
    console.log(message);
    res.end(message);
});



var server = app.listen(8081, function () {
    var host = server.address().address;
    var port = server.address().port;
    console.log("Example app listening at http://%s:%s", host, port);
});
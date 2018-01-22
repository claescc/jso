/* vooraf:  
npm install express
npm install cookie-parser
*/

var express = require('express');
var app = express();
var path = require("path");
var url = require("url");
var cookieParser = require('cookie-parser'); // extra voor cookies
 
app.use(cookieParser()); //: gebruik in alles app.use 

app.get('/setCookie', function (req, res){ /// 1st cookie zetten dan rest 
    res.cookie('policyOK', 'true'); //no naam + waarde = (string)
    res.end("cookie set"); // cookie enkelvoud bij versturen
});

app.get('/*', function(req, res){
    console.log(req.cookies); // cookies  meervoud bij ontvangen 
    if (req.cookies.policyOK != 'true'){
        res.sendFile(path.join(__dirname +'/cookies.html'));// toestemming te vragen voor gebruik
    }
    else{
        res.sendFile( path.join(__dirname + url.parse(req.url).pathname));
    }
});

var server = app.listen(1338, function () {
   var host = server.address().address;
   var port = server.address().port;

   console.log("Example app listening at http://%s:%s", host, port)
});
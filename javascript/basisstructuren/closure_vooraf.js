/* herhaling: lokale vs globale var */
'use strict';

var naam = "Joske";  // globaal
schrijfGlobaleVar();
schrijfLokaleVar();

function schrijfGlobaleVar(){
    console.log(naam);
}

function schrijfLokaleVar(){
    var naam = "Jeanne"; // lokaal
    var naam2 = "Geraar";
    console.log(naam);
    console.log(naam2);
}
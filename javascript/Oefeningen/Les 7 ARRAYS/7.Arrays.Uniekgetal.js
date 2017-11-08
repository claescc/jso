//------------------------------------------------------------------
//                    UNIEK GETAL
//------------------------------------------------------------------

/*Schrijf een script dat de gebruiker verplicht om 5 unieke getallen in te geven. Wanneer de gebruiker een getal toevoegt dat reeds ingegeven is, moet het script de foutmelding “reeds ingegeven” tonen en een nieuw getal vragen. Op het einde moeten de vijf unieke getallen van klein naar groot getoond worden.

*/

//------------------------------------------------------------------


'use strict';

console.log('   PROGRAMMA: UNIEK GETAL        ')

var toetsenbord = require('readline-sync');
var uniekeGettalen = [0, 0, 0, 0, 0];
var aantalNo = parseInt(toetsenbord.question("Hoeveel getallen:   "));
var x = parseInt(toetsenbord.question("Geef een getal:   "));
uniekeGettalen[0] = x;

for (var i = 1; i < aantalNo; i++) {        // 4 keer nog want reeds 1 getal gegeven
    var y = parseInt(toetsenbord.question("Geef een getal:   "));

    while (uniekeGettalen.indexOf(y) > -1) { // GETAL REEDS AANWEZIG  - error !
        y = parseInt(toetsenbord.question("Getal bestaat al geef ander getal in:   ")); // loop 
    }

    if (uniekeGettalen.indexOf(y) === -1) {    // not found
        uniekeGettalen[i] = y;
    }

}

console.log(uniekeGettalen);
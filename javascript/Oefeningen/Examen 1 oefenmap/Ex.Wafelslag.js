
'use strict';

console.log('   PROGRAMMA: WAFELSLAG       ')

var toetsenbord = require('readline-sync');
var soortWafel = toetsenbord.question("S. SUIKER WAFEL\n B. BRUSSELSEWAFEL\n Q. QUIT ");
var aantalWaffels = 0;
var suikerWafels = 0;
var bruWafels = 0;
var aantalextraatjes = 0;

// CONTROLE invoer m
while (soortWafel != 's' && soortWafel != 'b' && soortWafel != 'q') {
    var soortWafel = toetsenbord.question("ERROR: \n S. SUIKER WAFEL\n B. BRUSSELSEWAFEL\n Q. QUIT  ");
}


while (soortWafel != 'q') {              // zo lang er niet op  QUIT

    if (soortWafel == 's') {    //suikerwafel
        suikerWafels++;


    } else { // brusselsewafel
        bruWafels++;

    }
    aantalWaffels++;

    // end loop or add new wafel
    var soortWafel = toetsenbord.question("S. SUIKER WAFEL\n B. BRUSSELSEWAFEL\n Q. QUIT ");
    // CONTROLE invoer moet f, m of s zijn 
    while (soortWafel != 'f' && soortWafel != 'm' && soortWafel != 's') {
        var soortWafel = toetsenbord.question("ERROR: \n S. SUIKER WAFEL\n B. BRUSSELSEWAFEL\n Q. QUIT  ");
    }

}



// stop gedrukt
console.log('Totaal aantal mensen %s waarvan %s vrouwen en %s mannen', totaalMensen, aantalVrouwen, aantalMannen);
// bereken gemiddele
var gemiddeldeK = somKortingen / totaalMensen;
gemiddeldeK = gemiddeldeK.toFixed(2);
console.log('Gemiddelde aantal korting: %s', gemiddeldeK);


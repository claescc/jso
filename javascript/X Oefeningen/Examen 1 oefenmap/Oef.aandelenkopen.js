//------------------------------------------------------------------
//                      AANDELEN KOPEN
//------------------------------------------------------------------

/*Proglog07: Een gebruiker wil ongeveer 100 EUR beleggen. Een aandeel Fortis kost  3.75 EUR.
Vraag aan de gebruiker hoeveel aandelen Fortis hij of zij wil kopen. 
Toon het totaalbedrag van de aankoop. 
Blijf aan de gebruiker vragen hoeveel aandelen Fortis hij of zij wil kopen tot de 100 EUR op zijn.

Bijvoorbeeld: de gebruiker geeft 20 in als aantal. De volgende tekst zal verschijnen:
U heeft al gekocht voor 75.0 EUR.

De gebruiker geef nogmaals 20 in als aantal. De volgende tekst verschijnt:
U heeft al gekocht voor 150.0 EUR.

En omdat het maximum bedrag is overschreden stopt het programma met de boodschap:
Uw geld is op. */

//------------------------------------------------------------------

'use strict';

var toetsenbord = require('readline-sync');
var koopBedrag = parseInt(toetsenbord.question("Bedrag waarvoor u wil aankopen: "));
var aantalAandelen = parseInt(toetsenbord.question("Hoeveel aandelen wil u kopen: "));

while (koopBedrag>= 3.75) {
    var aandeelCalc = aantalAandelen*3.75;
    var koopBedrag = koopBedrag - aandeelCalc;

    if (koopBedrag <3.75){
        console.log("U heeft momenteel geen geld meer voor %s aandelen nog te kopen.",aantalAandelen);
    }
    else {
        console.log("U heeft momenteel al voor %s euro gekocht, u kan nog voor %s euro kopen.", aandeelCalc, koopBedrag);
        aantalAandelen = parseInt(toetsenbord.question("Hoeveel extra aandelen wil u kopen: "));
    }
    
}
console.log("Stopt onvoldoende geld."); 
 

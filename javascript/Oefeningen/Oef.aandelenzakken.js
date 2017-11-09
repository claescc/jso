//------------------------------------------------------------------
//                      AANDELEN ZAKKEN
//------------------------------------------------------------------

/* Proglog08. Verbeter het script proglog07 zodat het op de volgende manier werkt. 
Een gebruiker wil ongeveer 100 EUR beleggen. 
Een aandeel Fortis kost in het begin 3.75 EUR. 
Blijf aan de gebruiker vragen hoeveel aandelen Fortis hij of zij wil kopen tot het maximumbedrag 
overschreden is. Maar elke keer wanneer de gebruiker een aankoop doet, 
vermindert de prijs achteraf met 0.10 EUR. 
Het programma moet telkens het totaalbedrag van alle aankopen tonen en de huidige waarde van de 
portefeuille. Stel dat de gebruiker elke keer 10 aandelen zou kopen. 
De output van het programma zal er als volgt uitzien:
U heeft al gekocht voor 37.5 EUR.
De huidige waarde van uw portefeuille is:37.5
U heeft al gekocht voor 74.0 EUR.
De huidige waarde van uw portefeuille is:73.0
U heeft al gekocht voor 109.5 EUR.
De huidige waarde van uw portefeuille is:106.5
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
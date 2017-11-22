/*
oefening
Laat de gebruiker een gemeentenaam invoeren.  Als dit de eerste keer is dat die gemeentenaam ingevoerd wordt, vraag je het bijhorende postnummer.  Als de gemeentenaam al eerder ingevoerd werd, toon je het bijhorende postnummer.  Herhaal dit tot de gebruiker ‘stop’ invoert als gemeentenaam en toon dan het overzicht van alle postnummers en bijhorende gemeentenamen.
Veronderstel bij deze oefening dat gemeentenamen uniek zijn. */

'use strict';
console.log("Programma: POSTCODES")
var toetsenbord = require('readline-sync');

var lijst = new Array();
var gemeente;
var postcode;


gemeente = toetsenbord.question("Gemeente: ");
while (gemeente != "stop") {
    if (lijst[gemeente] == null) { // opvraaging null = die index wordt nog niet gebruikt
        postcode = toetsenbord.question("postCode: ");
        lijst[gemeente] = postcode;
        gemeente = toetsenbord.question("Gemeente: ");
    } else {
        console.log(lijst[gemeente]);
        gemeente = toetsenbord.question("Gemeente: ");
    }

}
for (gemeente in lijst) {  // overloop alle indexen van ASS Array 
    console.log("%s heeft als poscode : ", gemeente, lijst[gemeente]);
}
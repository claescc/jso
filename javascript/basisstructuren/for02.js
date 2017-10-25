'use strict';

var toetsenbord = require('readline-sync');
var tekst = toetsenbord.question("Geef een tekst: "); // hoe vaak staat i in tekst // schrijf iets
var teller = 0;
for (var i = 0; i < tekst.length; i++)    // var in declartaie // lengt geeft aantal characters in string
{                                          // smurf = 5 (lengte) enkel bij string
    if (tekst.charAt(i) == 'i') teller++;  // geef me lettercharacter van eerste woord en is die gelijk aan i 
}                                          // 1ste letter, 2de letter // char moet beginen van 0
console.log("De letter \"i\" komt " + teller + " maal voor");
                    // nog ni einde van text \"i\" Of 'i' 
                   // console.log("De letter 'i' komt " + teller + " maal voor");
// _________________________________________________________________________
for (var i = 0; i < tekst.length; i++) {
    if (tekst.charAt(i) == 'i') teller++;
}
console.log("De letter \"i\" komt " + teller + " maal voor");
console.log('De letter "i" komt ' + teller + " maal voor");

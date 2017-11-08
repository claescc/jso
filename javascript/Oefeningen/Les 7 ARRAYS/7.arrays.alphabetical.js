//------------------------------------------------------------------
//                     ALFABETISCH
//------------------------------------------------------------------

/*Oefening
Vraag 5 namen aan de gebruiker. Toon de namen alfabetisch gesorteerd.
*/

//------------------------------------------------------------------


'use strict';

console.log('   ARRAY: ALFABETISCH        ')

var toetsenbord = require('readline-sync');
var namen = parseInt(toetsenbord.question("Geef hoeveelheid namen in:  "));
var arrayNamen = [];

for (var index = 0; index < namen; index++) {
    var naam = toetsenbord.question("Geef naam in:   ");
    arrayNamen[index] = naam;
}
console.log("arrayNamen = %s", arrayNamen);

arrayNamen.sort();                                   // naam.sort        LEGE RONDE HAAKJES
console.log("Array Sorteren: ");
for (var i = 0; i < arrayNamen.length; i++) {                // loop en sorteren
    (arrayNamen[i]);
}
console.log(arrayNamen.toString());             //gesorteerde lijst gescheiden door komma's



//-----------------------Functies-----------------------------
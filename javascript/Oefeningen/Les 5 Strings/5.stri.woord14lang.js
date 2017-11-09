//------------------------------------------------------------------
//                     14 KARAKTERS LANG
//------------------------------------------------------------------

/*Oefening
Schrijf een script dat een woord vraagt aan de gebruiker dat minstens 14 karakters lang moet zijn. Zolang het woord niet minstens 14 karakters lang is, moet het programma een woord blijven vragen.

*/

//------------------------------------------------------------------

'use strict';

console.log('   PROGRAMMA: 14 KARAKTERS LANG       ')

var toetsenbord = require('readline-sync');
var stringX = toetsenbord.question("Geef woord van 14 karakters: ");



var controle = stringX.lenght;

while (controle >= 14) {
    console.log("Error: not 14 long");
    var stringX = toetsenbord.question("Geef woord van 14 karakters: ");
    var controle = stringX.lenght;
}
console.log("Correct: %s is 14 or more long!",stringX);  



//-----------------------Functies-----------------------------
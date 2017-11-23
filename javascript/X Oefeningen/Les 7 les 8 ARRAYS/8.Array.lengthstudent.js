//------------------------------------------------------------------
//                     LENGTE STUDENTEN GEMIDDELDE
//------------------------------------------------------------------

/*Oefening
Schrijf een script dat aan de gebruiker de lengte van de 9 cursisten van de klas vraagt.  Toon daarna 
de gemiddelde lengte van alle cursisten
de lengte en de positie (tussen 1 (incl) en 9 (incl)) van de kleinste cursist.

*/

//------------------------------------------------------------------


'use strict';

console.log('   PROGRAMMA: Lengte studenten Gemiddelde     ')

var toetsenbord = require('readline-sync');
var aantalStudenten = parseInt(toetsenbord.question("Hoeveel studenten:   "));
var gemLengte = 0;

var lengteStu = parseInt(toetsenbord.question("Lengte student:   "));
var kleinste = lengteStu;
gemLengte += lengteStu;

for (var i = 1 ; i < aantalStudenten; i++) {
    lengteStu = parseInt(toetsenbord.question("Lengte student:   "));
    gemLengte += lengteStu;
    // is new student kleiner dan vorige student?
    if (lengteStu < kleinste){
        kleinste = lengteStu;
    }
  
}

gemLengte /= aantalStudenten;
console.log("Gemiddelde lengte = %s\t aantal studenten =  %s", gemLengte, aantalStudenten);
console.log("Kleinste student = %s", kleinste);




//-----------------------Functies-----------------------------
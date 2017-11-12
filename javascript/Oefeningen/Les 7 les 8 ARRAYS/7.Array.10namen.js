//------------------------------------------------------------------
//                     10 NAMEN
//------------------------------------------------------------------

/*Oefening
Schrijf een script dat aan de gebruiker minstens 10 namen vraagt.  Als er minder dan 10 namen ingevoerd zijn, weiger je de lege string (“”) als naam, zodra er 10 of meer namen ingevoerd zijn moet de invoer stoppen al de lege string ingetikt wordt als naam.
Vraag daarna een positie aan de gebruiker. Als dit een geldige positie is (tussen 1 (incl) en het aantal ingevoerde namen (incl)), toon je de naam op die positie.  Anders toon je een foutmelding.

*/

//------------------------------------------------------------------


'use strict';

console.log('   PROGRAMMA: 10 NAMEN        ')

var toetsenbord = require('readline-sync');
var aantalNamen = parseInt(toetsenbord.question("Aantal namen:   "));
var stringNamen = [];
var emptyString = "";

for (var i = 0; i < aantalNamen; i++) {        // 10 keer 
    var naam = toetsenbord.question("Geef naam:   ");

    while (emptyString.indexOf(naam) > -1) { // LEGE STRING REEDS AANWEZIG  - error !
        naam = toetsenbord.question("Error! Geef een naam in:   "); // loop 
    }

    // geen empty string dus zet naam in Array
    stringNamen[i] = naam;

    // als Array. length = aantal namen dan STOP

}

// POSITIE OPVRAGEN AAN GEBRUIKER
var positie = toetsenbord.question("Geef positie in:   ");      // bv 1-10  --> 0-9 dus 
positie -= 1;  // 3  wordt positie 2

while (positie < 1 || positie >= aantalNamen) { // als pos 0 is of grooter dan aantal getallen ERROR
    positie = toetsenbord.question("Error: Geef positie in:   ");
}
console.log(stringNamen[positie])

//console.log(stringNamen);


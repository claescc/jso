//------------------------------------------------------------------
//                    WOORDEN PER ZIN
//------------------------------------------------------------------

/*Oefening
Schrijf een functie die het aantal woorden in een gegeven zin teruggeeft.  Veronderstel dat de woorden gescheiden worden door een spatie.  Vraag aan de gebruiker een zin en toon het aantal woorden in die zin.
*/

//------------------------------------------------------------------


'use strict';

console.log('   PROGRAMMA: WOORDEN PER ZIN       ')

var toetsenbord = require('readline-sync');
var zinX = toetsenbord.question("Geef een zin:   ");

//var result = aantalWoorden(zinX);
//console.log('Aantal woorden: %s',result);


console.log(aantalWoorden(zinX));

//-----------------------Functies-----------------------------

function aantalWoorden(x){              // woorden gescheiden door spaties..  vindt de spaties?
   var words = x.split(" ").length;
    return words;
}


/*
function wordsAantal(x) {
    var totalSoFar = 0;
    for (var i = 0; i < x.length; i++)
        if (x.charAt(i) === " ") { // if a space is found in str
            totalSoFar = +1; // add 1 to total so far
        }
    totalsoFar += 1; // add 1 to totalsoFar to account for extra space since 1 space = 2 words
}
*/

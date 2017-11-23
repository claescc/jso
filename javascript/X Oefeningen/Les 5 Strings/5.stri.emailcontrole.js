//------------------------------------------------------------------
//                     e-mailadres geen ‘@’
//------------------------------------------------------------------

/*Oefening
Schrijf een script dat een e-mailadres vraagt aan de gebruiker. Zolang er in het e-mailadres geen ‘@’ voorkomt, moet het opnieuw gevraagd worden.

The indexOf() method returns the index within the calling String object of the first occurrence of the specified value, starting the search at fromIndex. Returns -1 if the value is not found.

SyntaxEdit:
str.indexOf(searchValue[, fromIndex])*/

//------------------------------------------------------------------


'use strict';

console.log('   PROGRAMMA: email controle        ')

var toetsenbord = require('readline-sync');
var stringX = toetsenbord.question("Geef email adres: ");



var controle = stringX.indexOf("@");

while (controle == -1) {
    console.log("Error: not a correct email\n");
    var stringX = toetsenbord.question("Geef email adres: ");
    var controle = stringX.indexOf("@");
}
console.log("Correct: email found!");  


/* Note that '0' doesn't evaluate to true and '-1' doesn't evaluate to false. Therefore, when checking if a specific string exists within another string the correct way to check would be:

'Blue Whale'.indexOf('Blue') !== -1; // true
'Blue Whale'.indexOf('Bloe') !== -1; // false   */


//-----------------------Functies-----------------------------
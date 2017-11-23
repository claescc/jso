//------------------------------------------------------------------
//                   KOMMA SPATIE PROGRAMMA
//------------------------------------------------------------------

/*Oefening
Schrijf een javascript programma dat een zin vraagt aan de gebruiker. Overal waar er een komma in de zin staat, moet er een (extra) spatie achter gezet worden. De nieuwe zin moet getoond worden. 
“Jan,die hier woont,is weg” wordt dus 
“Jan, die hier woont, is weg”
_______________________________________________________________
The replace() method returns a new string with some or all matches of a pattern replaced by a replacement. The pattern can be a string or a RegExp, and the replacement can be a string or a function to be called for each match.

Note: The original string will remain unchanged.

SyntaxEdit

str.replace(regexp|substr, newSubstr|function)
*/

//------------------------------------------------------------------

'use strict';

console.log('   PROGRAMMA: KOMMA SPATIE    ')

var toetsenbord = require('readline-sync');
var stringX = toetsenbord.question("Geef een zin in: ");

// To perform a global search and replace, include the g switch in the regular expression.

var controle = stringX.replace(/,/g,', ');
console.log(stringX);
console.log(controle);



//-----------------------Functies-----------------------------
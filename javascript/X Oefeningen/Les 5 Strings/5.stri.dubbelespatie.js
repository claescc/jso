//------------------------------------------------------------------
//                  DUBBELE SPATIE PROGRAMMA
//------------------------------------------------------------------

/*Oefening
Schrijf een javascript programma dat een zin vraagt aan de gebruiker. 
Alleen een spatie mag er achter de komma worden gezet wanneer er nog geen spatie stond. 
Er mogen dus geen dubbele spaties worden gezet.

“Jan,die hier woont, is weg”  
“Jan, die hier woont, is weg”

_______________________________________________________________
The replace() method returns a new string with some or all matches of a pattern replaced by a replacement. The pattern can be a string or a RegExp, and the replacement can be a string or a function to be called for each match.

Note: The original string will remain unchanged.

SyntaxEdit

str.replace(regexp|substr, newSubstr|function)
*/

//------------------------------------------------------------------

'use strict';

console.log('   PROGRAMMA: DUBBELE SPATIE    ')

var toetsenbord = require('readline-sync');
var stringX = toetsenbord.question("Geef een zin in: ");


var controle = stringX.replace(/, /g,',');  // Hey, you   -> hey,you
var controle2 = controle.replace(/,/g,', ');  //hey,you  -> Hey, you
console.log(stringX);
console.log(controle);
console.log(controle2);



//-----------------------Functies-----------------------------
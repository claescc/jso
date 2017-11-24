//------------------------------------------------------------------
//                   G VERVANGEN DOOR H EN H DOOR G
//------------------------------------------------------------------

/*Oefening
Schrijf een script waarin de gebruiker een tekst ingeeft. Maak op basis van die tekst een nieuwe tekst waarin je elke 'g' hebt vervangen door een 'h' en elke 'h' door een 'g'. De tekst “heel goed” wordt dus “geel hoed”.
*/

//------------------------------------------------------------------

'use strict';

console.log('   PROGRAMMA: KOMMA SPATIE    ')

var toetsenbord = require('readline-sync');
var stringX = toetsenbord.question("Geef een zin in: ");

// To perform a global search and replace, include the g switch in the regular expression.

var controle = stringX.replace(/g/g,'#');
var controle2 = controle.replace(/h/g,'g');
var controle4 = controle2.replace(/#/g,'h');

console.log(stringX);
console.log(controle4);



//-----------------------Functies-----------------------------


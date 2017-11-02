
//------------------------------------------------------------------
//                   Functie Antwerps & LIMBURG
//------------------------------------------------------------------

/*Oefening
Schrijf een functie (naarAntwerps) waarmee je een doorgegeven tekst kunt vertalen naar het Antwerps door elke “h” weg te laten (“heel goed” wordt “eel goed”). 

Schrijf er ook één voor het Limburgs (naarLimburgs, elke klinker verdubbelen): “heel goed” wordt “heeeel gooeed”.  Vraag aan de gebruiker een zin en vertaal deze naar het Antwerps en het Limburgs.
*/

//------------------------------------------------------------------

'use strict';

console.log('   PROGRAMMA: ANTWERP & LIMBURG    ')

var toetsenbord = require('readline-sync');
var stringX = toetsenbord.question("Geef een zin in: ");

// To perform a global search and replace, include the g switch in the regular expression.

var controle = stringX.replace(/g/g,'#');


console.log(stringX);
console.log(controle4);



//-----------------------Functies-----------------------------
function naarAntwerps(x){
                                                // 
}

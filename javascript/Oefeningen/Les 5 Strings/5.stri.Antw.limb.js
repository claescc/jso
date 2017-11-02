
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

var vertalingA = naarAntwerps(stringX);
console.log("ANT: ", vertalingA);

var vertalingL = naarALimburgs(stringX);
console.log("LIM: ", vertalingL);



//-----------------------Functies-----------------------------
function naarAntwerps(x) {

    var result = x.replace(/h/g, '');
    return result;
}

function naarALimburgs(x) {

    var x1 = x.replace(/e/g, 'ee');
    var x2 = x1.replace(/a/g, 'aa');
    var x3 = x2.replace(/i/g, 'ii');
    var x4 = x3.replace(/o/g, 'oo');
    var result = x4.replace(/u/g, 'uu');
    return result;
}                            
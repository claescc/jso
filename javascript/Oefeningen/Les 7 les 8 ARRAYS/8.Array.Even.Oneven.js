//------------------------------------------------------------------
//                   10 GEHELE & EVEN GETALLEN 
//------------------------------------------------------------------

/*Oefening
Schrijf een script dat 10 (gehele) getallen vraagt aan de gebruiker.  
Toon daarna welke van die getallen even zijn.

*/

//------------------------------------------------------------------


'use strict';

console.log('   PROGRAMMA: Even getallen / Gehele getallen     ')
var toetsenbord = require('readline-sync');
var geheleGetallen = [];


var aantalNo = parseInt(toetsenbord.question("Hoeveel getallen:   "));
var x = parseInt(toetsenbord.question("Geef een geheel getal:   "));
geheleGetallen[0] = x;

// Getallen in ARRAY steken:
for (var i = 1; i < aantalNo; i++) {        // 9 keer nog want reeds 1 getal gegeven
    var y = parseInt(toetsenbord.question("Geef een geheel getal:   "));
    geheleGetallen[i] = y;

}
// Controle Even oneven --> %2 MOD !! 
var evenGetallen = new Array();
for(var i=0; i< geheleGetallen.length; i++){
    var limbo = geheleGetallen[i];
    limbo = limbo%2;
    if (limbo == 0) {
        evenGetallen.push( geheleGetallen[i] );
    }
    
}

console.log("Even getallen = %s ", evenGetallen);
//console.log("Gehele getallen = %s ",geheleGetallen); // Array met ALLE gehele getallen 


//-----------------------Functies-----------------------------

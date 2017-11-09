//------------------------------------------------------------------
//                   PALINDROOM
//------------------------------------------------------------------

/*Oefening
Schrijf een script dat een woord vraagt aan de gebruiker. Het script moet controleren of het ingevoerde woord een palindroom is. Dat wil zeggen een woord dat van voor naar achter gelezen en van achter naar voor gelezen hetzelfde is. 

Bijvoorbeeld kok, lepel of koortsmeetsysteemstrook.
*/

//------------------------------------------------------------------

'use strict';

console.log('   PROGRAMMA: PALINDROOM    ')

var toetsenbord = require('readline-sync');
var stringX = toetsenbord.question("Geef een palindroom in: ");

var wordlength = stringX.length;        // hoe lang is het woord?
      

stringX.length - 1;  //posistie laatste character


/* --> zie oefening uitkomst van Ann

// charAt(0) == charAt(Worldlenght)
var start = 0;
var end = wordlength;       // 5
var vergelijk = Math.floor(wordlength/2);   // 2

var begin = stringX.charAt(start);      // var = letter op positie start 0
var einde = stringX.charAt(end);         // var = letter op positie end 5

for (var i = 0; i < vergelijk; i++) {   
                                                  // 5 lang maar 2x vergelijking      LEPEL
    if (begin == einde) {                                      //   0 == 5   --> L == L
        console.log("start = %s  end = %s",begin,einde);
        var begin = stringX.charAt(start+1);
        var einde = stringX.charAt(end-1);
        
    } else {
        console.log("start = %s  end = %s",begin,einde);
        console.log("Geen palindroom");
    }
 
    
}

console.log("The end.") */

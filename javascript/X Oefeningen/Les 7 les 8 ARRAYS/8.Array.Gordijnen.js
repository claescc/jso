//------------------------------------------------------------------
//                     GORDIJNEN
//------------------------------------------------------------------

/*Oefening
Een firma verkoopt gordijnen van 60 cm, 90 cm, 120 cm, 150 cm en 200 cm breed. Schrijf een script waarbij de gebruiker de breedte van het raam ingeeft, en waar de breedte van de smalste gordijnen die groot genoeg zijn wordt getoond. Bijvoorbeeld: mijn raam meet 130 cm, dus ik heb gordijnen van 150 cm nodig.

*/

//------------------------------------------------------------------


'use strict';

console.log('   PROGRAMMA: GORDIJNEN BEREKENEN    ')

var toetsenbord = require('readline-sync');
var gordijnX = parseInt(toetsenbord.question("Width window in cm :   "));
var stoffenGordijen  = [60,90,120,150,200]

// Doorloop heel de lus tot Maat <= is dan STOF

for (var i = 0; i < stoffenGordijen.length; i++) { // loop heel array door !  100cm bv
    
    if (gordijnX <= stoffenGordijen[i]){ // is 100 cm <= 60 ? FALSE / 100<90 FALSE / 100<120 TRUE 
        console.log("Stof breedte is = %s cm", stoffenGordijen[i]);
        break; // STOP FOR-LOOP when found !! 
    }
    
}




//-----------------------Functies-----------------------------
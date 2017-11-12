//------------------------------------------------------------------
//                   LIJN TEKENEN
//------------------------------------------------------------------
/*Proglog04: Schrijf een script dat een schuine lijn op het scherm tekent. 
De gebruiker moet het aantal sterretjes ingeven dat moet getekend worden. 
Stel dat de gebruiker als aantal “5” ingeeft, dan moet de volgende output verschijnen.
*
 *
  *
   *
    */                                                              
//------------------------------------------------------------------

'use strict';

var toetsenbord = require('readline-sync');
var nrStars = parseInt(toetsenbord.question("Aantal sterretjes dat getekend moet worden: "));

console.log("Hieronder uw sterretjes");
drawLine(nrStars);

// Functie LIJNTEKENEN

function drawLine(x) {
    var spaces = "";
    for (var i = 1; i <= x; i++) {
        console.log(spaces + "*");
        spaces += " ";
    }

}

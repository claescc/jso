//------------------------------------------------------------------
//                   DRIEHOEK TEKENEN
//------------------------------------------------------------------
/*
Proglog05: schrijf een script waarmee je een gelijkbenige, 
rechthoekige driehoek op het scherm kunt tekenen. 
Vraag aan de gebruiker de rechthoekszijde en teken de driehoek met ‘*’ tekens.
Bijvoorbeeld: de gebruiker geeft 5 in als rechthoekszijde. 
Op het scherm moet de volgende tekening verschijnen:
*
**
* *
*  *
*****/                                                             
//------------------------------------------------------------------

'use strict';

var toetsenbord = require('readline-sync');
var nrStars = parseInt(toetsenbord.question("Aantal sterretjes dat getekend moet worden: "));
var bottomStars = "";

console.log("Hieronder uw drieHoek");
drawTriangle(nrStars);

// ____________________________Functie LIJNTEKENEN____________

function drawTriangle(x)
 {
 
    var spaces = "";
    for (var i = 1; i <= x; i++)                // de lijn links en diagonaal rechts
     {
        console.log("*"+ spaces + "*");
        spaces += " ";
    }  
    bottomStars = "";
    for(var i=1; i <= x;i++){               // de ondersterij 
        bottomStars += "*";
    }
    console.log(bottomStars);
}
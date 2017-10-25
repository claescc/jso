// ________________________OEF 1 BANK __________________________________________________
/*
'use strict';

var toetsenbord = require('readline-sync');
var naamBank = toetsenbord.question("Naam bank: ");
var kapitaal = parseInt(toetsenbord.question("Bedrag: "));
//var rente = parseInt(toetsenbord.question("Rentevoet: "));
// var newkap = renteFunc(kapitaal, rente)

if (naamBank.toUpperCase()== "KAUPTHING") 
    {
    // console.log("U kunt voorlopig uw geld niet opvragen.");
    if (kapitaal>20000) { console.log ("Max bedrag dat je kan terugkrijgen is 20000 euro."); }
    else { console.log("U krijgt %s.", kapitaal); }
    }
else 
{ 

//var newkap = renteFunc(kapitaal)
// RENTE // console.log("Bij %s bedraagt het rentebedrag %s EUR. Het totaalbedrag is %s EUR.",naamBank, rente,newkap);
// console.log("Bij %s bedraagt het rentebedrag 0.4 EUR. Het totaalbedrag is %s EUR.",naamBank,newkap);
console.log("U krijgt %s.", kapitaal)
}
*/
// ____________________________Functie bank_______________________________________________

/* Als RENTE OOK VARIABLE IS :
function renteFunc(x, y) {             
    var result = 1;           
      var rente = x*(y/100+1)
      result = rente;                                      
    return result;             
}
*/
// RENTE VAST :
/*
function renteFunc(x) {             
    var result = 1;           
      var rente = x*1.04
      result = rente;                                      
    return result;             
}
*/
// ________________________OEF 2 LIJN TEKENEN __________________________________________________
/*
Proglog04: Schrijf een script dat een schuine lijn op het scherm tekent. 
De gebruiker moet het aantal sterretjes ingeven dat moet getekend worden. 
Stel dat de gebruiker als aantal “5” ingeeft, dan moet de volgende output verschijnen.
*
 *
  *
   *
    */ /*
'use strict';

var toetsenbord = require('readline-sync');
var nrStars = parseInt(toetsenbord.question("Aantal sterretjes dat getekend moet worden: "));

console.log("Hieronder uw sterretjes");
drawLine(nrStars);

// ____________________________Functie LIJNTEKENEN____________

function drawLine(x) {
    var spaces = "";
    for (var i = 1; i <= x; i++) {
        console.log(spaces + "*");
        spaces += " ";
    }

}

*/

//___________________________________________________________________________________________________
//________________________________________DRIEHOEK__________________________________________________________
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
*****/ /*

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
/*
//___________________________________________________________________________________________________
//________________________________________TRAPEZIUM__________________________________________________________
/*Proglog06: schrijf een script waarmee je een parallellogram kunt tekenen. De gebruiker moet de hoogte ingeven. De lengte van de rechte zijden moet 3 * de hoogte zijn..
Bijvoorbeeld: de gebruiker geeft 5 in als hoogte. Op het scherm moet de volgende tekening verschijnen:
***************
 *             *
  *             *
   *             *
    ***************/

    'use strict';
    
    var toetsenbord = require('readline-sync');
    var nrStars = parseInt(toetsenbord.question("Aantal sterretjes dat getekend moet worden: "));
    var bottomStars = "";
    var topStars = "";
    
    console.log("Hieronder uw Trapezium");
    drawTrap(nrStars);
    
    // ____________________________Functie LIJNTEKENEN____________
    
    function drawTrap(x)
     {
        topStars = "";
        for(var i=1; i <= x;i++){               // de Bovenste rij
            topStars += "*";
        }
        console.log(topStars+topStars);

    //------------------------------------
     
        var spacesLeft = "";
        for (var i = 1; i <= x; i++){                // diagonaal links 
            console.log(spacesLeft + "*")
            spacesLeft += " ";
        }  
       /* var spacesMiddle = "";
        for (var i = 1; i <= x; i++){                // diagonaal rechts 
            spacesMiddle += " ";
        } 
        console.log(spacesMiddle + "*");
        */

    //------------------------------------


        bottomStars = "";
        for(var i=1; i <= x;i++){               // de onderste rij 
            bottomStars += "*";
        }
        spacesLeft += " "
        console.log(spacesLeft+bottomStars+bottomStars);
    }
//------------------------------------------------------------------
//                   TRAPEZIUM TEKENEN
//------------------------------------------------------------------

/*Proglog06: schrijf een script waarmee je een parallellogram kunt tekenen. De gebruiker moet de hoogte ingeven. De lengte van de rechte zijden moet 3 * de hoogte zijn..
Bijvoorbeeld: de gebruiker geeft 5 in als hoogte. Op het scherm moet de volgende tekening verschijnen:
***************
 *             *
  *             *
   *             *
    ***************/                                                         
//------------------------------------------------------------------

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
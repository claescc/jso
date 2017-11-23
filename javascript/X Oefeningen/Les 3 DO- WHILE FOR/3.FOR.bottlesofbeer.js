/*_________________________________________________________________
                        BOTTLES OF BEEER
 _________________________________________________________________*/ 
 
'use strict';

var toetsenbord = require('readline-sync');
var startGetal = parseInt(toetsenbord.question("Geef een startgetal: ")); 
var container = toetsenbord.question("Geef een container: "); 
var consumptie = toetsenbord.question("Geef een consumptie artikel: "); 
var teller = 0;
var aantalZuip = startGetal

for (var teller = 1;                        // for teller := 1
     teller <= startGetal;                  // to startgetal
     teller++)                              // teller + 1  (dan telt uw teller elke keer op)
{  
    console.log(aantalZuip + " " + container + " of " + consumptie + " on the wall " + aantalZuip + " " + container +  " of " + consumptie );
    // write song 
    aantalZuip -= 1;
    // minus one 
    console.log("Take one down and pass it around, " + aantalZuip + " " + container + " of " + consumptie + " on the wall.");
    // write second verse                 
    
}
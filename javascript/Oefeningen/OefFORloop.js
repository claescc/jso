/*_________________________________________________________________
BOTTLES OF BEEER
 _________________________________________________________________/ 
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
*/


/*_________________________________________________________________
MAAL TAFELS 
 _________________________________________________________________/

 'use strict';
 
 var toetsenbord = require('readline-sync');
 var maalTafels = parseInt(toetsenbord.question("Geef aantal maaltafels in: ")); 
 var aantal = 10;
 var som;
 var teller = 0;
 var tafel = 0

 for (var teller = 0; teller <= maalTafels ; teller++) { // hoeveel tafels laten we zien
   
    var tafel = tafel + 1           // dit moet 5 keer gaan 
    for (var teller = 0; teller <= aantal; teller++) 
    {
        som = (teller*tafel)
        console.log("%s x %s = %s\n", teller, tafel, som); 
    }

     
 }
 */
/*_________________________________________________________________
VRAAG 5 GETALLEN
 _________________________________________________________________*/

 'use strict';
 
 var toetsenbord = require('readline-sync');
 var aantalGetallen = parseInt(toetsenbord.question("Aantal getallen: ")); 
 //var getalA = parseInt(toetsenbord.question("Geef getal ")); 
 var som = 0;


 while (aantalGetallen != ) {
     
 }
     for (var teller = 1; teller <= aantalGetallen; teller++) 
     {
    var getalB = parseInt(toetsenbord.question("Geef volgend getal in "));
    som = som+getalB;
    //getalA = 0; 
    }
    console.log("De som van de 5 getallen is = %s",som); 




 


/* // functie defenitie maken 
macht = berekenMacht(getal1, getal2);
console.log("%d tot de %de macht is %d", getal1, getal2, macht);

function berekenMecht(grondtal, exponent){    // lus maken voor exponent keer maal grodntal
    var resultaat = 1;                             // moet begin waarde 1 krijgen !! 1*0 is 1
        for ( var i = 1; i <= exponent; i++){  // FOR loop
            resultaat *= grondtal;
        }
    }
    return resulaat;
}} 
*/
//______________________________________________________________________
// AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA
/*

'use strict';

var toetsenbord = require('readline-sync');
var getal1, getal2, resultaat;

getal1 = toetsenbord.question("Geef eerste getal: ");
getal2 = toetsenbord.question("Geef tweede getal: "); 

resultaat = max(getal1, getal2);
console.log("Het max getal is %d", resultaat);



function max(x, y) {             
    var result = 1;                 // zet var klaar voor te berekenen
   
      if (x > y)                    // berekening 
      {
          result = x;
      } 
      else (y> x)
      { 
      result = y;
     }         
                                       
    return result;            // return zorgt ervoor dat functie gedaan is end calc  
} 
*/
// BBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBB

'use strict';

var toetsenbord = require('readline-sync');
var getal1, getal2, getal3, resultaat;

getal1 = toetsenbord.question("Geef eerste getal: ");
getal2 = toetsenbord.question("Geef tweede getal: "); 
getal3 = toetsenbord.question("Geef tweede getal: "); 

resultaat = max(getal1, getal2);
resultaat = max (resultaat, getal3);
console.log("Het max getal is %d", resultaat);



function max(x, y) {             
    var result = 1;                 // zet var klaar voor te berekenen
   
      if (x > y)                    // berekening 
      {
          result = x;
      } 
      else
      { 
      result = y;
     }         
                                       
    return result;            // return zorgt ervoor dat functie gedaan is end calc  
} 
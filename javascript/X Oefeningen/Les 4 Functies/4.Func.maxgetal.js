//------------------------------------------------------------------
//                   FUNCTIE GROOTSTE GETAL 
//------------------------------------------------------------------


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
/*

//------------------------------------------------------------------
//                   FUNCTIE GROOTSTE GETAL 
//------------------------------------------------------------------

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
*/
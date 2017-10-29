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
*/

// CCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCC 

'use strict';

var toetsenbord = require('readline-sync');
var resultaat;

var x = toetsenbord.question("Geef eerste getal: ");


resultaat = BEFNaarEuro(x);
console.log("Belgische frank is = Euro %s", resultaat);



function BEFNaarEuro(BEF) {             
    var result = 1;                         // maak variabel van WISSELKOERS
      result = BEF/40.3399                                        
    return result;             
}

*/
// DDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDD

'use strict';

var toetsenbord = require('readline-sync');
var resultaat;

var x = toetsenbord.question("Geef prijs van brood in euro : ");
var y = toetsenbord.question("Geef prijs van melk in euro : ");

resultaat = (  (EuroNaarBEF(x))    +   (EuroNaarBEF(y))    );
console.log("euro zou = Belgische Frank %s", resultaat);

function EuroNaarBEF(EURO) {             
    var result = 1;           
      result = EURO*40.3399                                        
    return result;             
}
*/
// EEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEE

'use strict';

var toetsenbord = require('readline-sync');
var resultaat;

var x = toetsenbord.question("celsius in: ");

resultaat = celsius (x)
console.log("Fahrenheit = ", resultaat);

function celsius(x) {             
    var result = 1;           
      var c = 5.0/9.0*(x - 32);
      result = c;                                      
    return result;             
}
*/
//FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF


'use strict';

var toetsenbord = require('readline-sync');
var resultaat;

var x = toetsenbord.question("Fahrenheit in: ");
var y = toetsenbord.question("celsius in: ");

resultaat = fahrenheit (x)
console.log("is Celsius = ", resultaat);

resultaat = celsius (y)
console.log("Fahrenheit = ", resultaat);
// ___________________________________________________________________________

function celsius(x) {             
    var result = 1;           
      var c = 5.0/9.0*(x - 32);
      result = c;                                      
    return result;             
}

function fahrenheit(y) {             
    var result = 1;           
      var f = 9.0/5.0*y + 32; 
      result = f;                                      
    return result;             
}
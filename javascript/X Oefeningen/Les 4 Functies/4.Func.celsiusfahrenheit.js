//------------------------------------------------------------------
//                   FUNCTIE CELSIUS NAAR FAHRENHEIT
//------------------------------------------------------------------

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


//------------------------------------------------------------------
//                   FUNCTIE  FAHRENHEIT NAAR  CELSIUS
//------------------------------------------------------------------

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
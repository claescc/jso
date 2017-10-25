'use strict';

var toetsenbord = require('readline-sync');
var getal = toetsenbord.question('Tik een getal in: ');

// wat doet onderstaand script?//  FACULTEIT 1*2*3*4*5
var resultaat = 1;
for (var i = 2; i <= getal; i++) {  
    resultaat *= i;
}

console.log(resultaat);

// functie delclartie maken
function faculteit(x) { // we weten nog niet wat X is parameter 
        var result = 1;              // start voor te berekenen // voorlopig in 3 stappen werken
                                    // voor resultaat te berekenen  
        return result:              // uitkomst berekening 
}

//__________________________________________________________________________

// functie defenitie maken
function faculteit(x) {             // welk getal is x ?
    var result = 1;                 // zet var klaar voor te berekenen
    for (var j = 2; j<= x ; j++){   // x mag gebruikt worden voor berekening
        result *= j;                // herhaald worden aantal x keer 
    }                                   
    return result:            // return zorgt ervoor dat functie gedaan is end calc  
}

//__________________________________________________________________________

// functie OPROEPEN

resultaat = faculteit(getal) // oproep: wordt berekend.
// som = functieNaam(x)  

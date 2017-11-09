'use strict';

var toetsenbord = require('readline-sync');
var getal = toetsenbord.question('Tik een getal in: ');

// wat doet onderstaand script?//  FACULTEIT 1*2*3*4*5
/*
// wat doet onderstaand script?
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
    return result;            // return zorgt ervoor dat functie gedaan is end calc  
}

//__________________________________________________________________________

// functie OPROEPEN

resultaat = faculteit(getal) // oproep: wordt berekend.
// som = functieNaam(x)  
console.log(resultaat);         // geeft de uitkomst$

// OF 
console.log(faculteit(getal));   // resultaat ineeens in write 

//__________________________________________________________________________

// functie oefeningen 

console.log(faculteit(getal));
if ( faculteit(10) > 300000){
    console.log("10! is groter dan 30000")
}
*/
// om deze berekening leesbaarder te maken en 
// toe te kunnen passen voor andere getallen, 
// gebruiken we een functie:

// functiedefinitie/-declaratie:
function faculteit(x) {                     // reserveert blok voor deze functie (3)  // 10
    console.log("functie wordt uitgevoerd")
    var result = 1;     // new lokale var result    (tijdelijk)
    for (var j = 2; j <= x; j++) {  // new var j  (tijdelijk)       x is 3   // x is 10
        result *= j;    // 6                    (tijdelijk)
    }
    return result;      // geef 6Terug      // geef facul10Terug
    // return
    // => beeindig functie en geef waarde die achter return staat terug als uitkomst
    // (als een fie geen expliciete returnwaarde heeft, 
    // geeft ze impliciet undefined terug)
}


// functie oproep:
var resultaat = faculteit(getal);          //6Terug    // oproep functie + geheugeplaats voor elke parameter
console.log(resultaat);
console.log(faculteit(10));         // geef facul10Terug
if( faculteit(5) < 20){
    console.log("5! is kleiner dan 20");
}

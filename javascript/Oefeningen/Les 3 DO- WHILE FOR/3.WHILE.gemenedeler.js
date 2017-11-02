
/* _________________________________________________________________

GROOTST GEMENE DELER
_________________________________________________________________ */
'use strict';

console.log('Oefening WHILE 2 ');

var toetsenbord = require('readline-sync'); 
var ingaveA =  parseInt(toetsenbord.question("Geef eerste getal: "));
var ingaveB =  parseInt(toetsenbord.question("Geef tweede getal: "));
var grootste, kleinste, verschil;

// var result = "De grootste gemene deler van " + a + " en " + b + " is "; (geen comma get .log)

while (ingaveA < 0) {
    ingaveA = parseInt(toetsenbord.question("Geef opnieuw getal A in "));
}
while (ingaveB < 0) {
    ingaveA = parseInt(toetsenbord.question("Geef opnieuw getal B in "));
}

while (ingaveA != ingaveB)  // je moet uit lus kunnen geraken door a niet gelijk aan elkaar te krijgen 
{
    if (ingaveA>ingaveB)
    {
        ingaveA -= ingaveB;             // ingaveA = (ingaveA - ingaveB)
    
       
    }
    else if (ingaveB> ingaveA)
    {
        ingaveB -= ingaveA;
    }
    //verschil = grootste-kleinste;
}
console.log("Stop : GGD= ", ingaveA );  




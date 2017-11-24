/* _________________________________________________________________
GEMIDDELDE 
_________________________________________________________________ */
'use strict';

console.log('Oefening WHILE 1');

var toetsenbord = require('readline-sync'); 
var ingaveA =  parseInt(toetsenbord.question("Geef eerste getal: "));
var som = 0;        // var som =0 ,aantal = 0;
var aantal =0 ;

while (ingaveA >= 0) {
    som = som + ingaveA;   // som += ingaveA;
    aantal= aantal+1       // aantal++;
    ingaveA = parseInt(toetsenbord.question("Geef volgende getal "));
}
console.log("Stop : Gemiddelde is= ", (som/aantal) ); 





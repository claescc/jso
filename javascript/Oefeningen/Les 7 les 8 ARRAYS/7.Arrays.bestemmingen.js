'use strict'

var holidays1 = ["Japan", "Thailand", "New York"];

var holidays2= [];

// maak 2 een kopie van 1

/*holidays2 = holidays1;
console.log("Holiday 2 is %s",holidays2);
console.log("Holiday 1 is %s",holidays1);
*/

for (var i = 0; i < holidays1.length; i++) {                    // van voor naar achter overlopen 
 holidays2[i] = holidays1[i];                                // geef elk element in
}
console.log("Holiday 2 is %s", holidays2);
console.log("Holiday 1 is %s", holidays1);

holidays1 [0] = "Hoboken";                      // 1 aanpassen is 2 nog steeds kopie van origineel?
console.log("Holiday 1 is %s", holidays1);
console.log("Holiday 2 is %s", holidays2);

// poging 3         SLICE
holidays2 = holidays1.slice();
holidays1 [0] = "Antwerpen";
console.log("Holiday 1 is %s", holidays1);         //          SLICE
console.log("Holiday 2 is %s", holidays2);

// poging 4         CONCATENEREN 
holidays2 = [];
holidays2 = holidays2.concat(holidays1); 
holidays1 [0] = "New York";
console.log("Holiday 1 is %s", holidays1);          //          CONCATENEREN
console.log("Holiday 2 is %s", holidays2);
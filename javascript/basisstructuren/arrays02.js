'use strict';

var toetsenbord = require('readline-sync');

// array met ruimte voor 5 elementen maken
var lijst = new Array(5);   // zoveel vakjes reserveren
for (var i = 0; i < lijst.length; i++) {                    // van voor naar achter overlopen 
    lijst[i] = toetsenbord.question("Geef een tekst: ");    // geef elk element in
}

// Alfabetische sorteren ! 
lijst.sort();               // naam.sort        LEGE RONDE HAAKJES
console.log("dit zijn de gesorteerde gegevens: ");
for (var i = 0; i < lijst.length; i++) {                // loop en sorteren
    console.log(lijst[i]);
}
console.log(lijst.toString()); //lijst gescheiden door komma's
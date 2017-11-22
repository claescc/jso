'use strict';

var toetsenbord = require('readline-sync');

var lijst = new Array();
var naam;
for (var i = 0; i < 5; i++) {
    naam = toetsenbord.question("Geef een naam: ");
    if (lijst[naam] == null) { // opvraaging null = die index wordt nog niet gebruikt
        lijst[naam] = 0; 
    }      
    lijst[naam]++;
}
for (naam in lijst) {  // overloop alle indexen van ASS Array 
    console.log("%s komt %d keer voor.", naam, lijst[naam]);
}
/* 'use strict';
console.log('Oefening1')

var toetsenbord = require('readline-sync'); // require en (naam module) dat je willen runnen.

var ingaveA = toetsenbord.question('Geef eerste getal:  '); // vraag aan gebruiker, antwoord = getalA
var ingaveB = toetsenbord.question('Geef tweede getal:  ');
var getalA, getalB;

getalA = parseInt(ingaveA);
getalB = parseInt(ingaveB);

console.log(getalA*getalB); 

console.log('Het product is, %s!' , (getalA*getalB)); */

console.log('Oefening2 Loon')

var toetsenbord = require('readline-sync'); // require en (naam module) dat je willen runnen.

var loonA = toetsenbord.question('Geef uw loon in:  '); // vraag aan gebruiker, antwoord = getalA
var loonB = toetsenbord.question('Geef uw loonsverhoging in:  ');
var getalA, getalB;

getalA = parseInt(loonA);
getalB = parseInt(loonB); // parsefloat(getal1) wordt eens tring een commagetal 

console.log('Uw nieuw loon is = %s ', (getalA+getalB)); // parsefloat (A) + parsefloat (B) = getal + getal = decimal getal


'use strict';
/* OEFENING IF  1  
console.log('Oefening1 IF ZAKGELD');


var toetsenbord = require('readline-sync'); // require en (naam module) dat je willen runnen.
var zakGeld = toetsenbord.question('Geef uw zakgeld in:  '); 


if (zakGeld > 5) {
	console.log("Voor mij een ijsje met 3 bollen en slagroom aub"); 
} 
else if (zakGeld <= 5) {
	console.log("Ik zal wel een platte water drinken"); // else if dan...
} */

OEFENING IF  2  
console.log('Oefening1 IF ZAKGELD');


var toetsenbord = require('readline-sync'); // require en (naam module) dat je willen runnen.
var naam = toetsenbord.question('Geef uw naam in:  '); 
var leeftijd = toetsenbord.question('Geef uw leeftijd in:  '); 

if (leeftijd > 14) {
	console.log("Sorry, deze pagina is enkel voor kinderen"); 
} 
else if (leeftijd <= 14) {
	console.log("Welkom"); // else if dan...
} 

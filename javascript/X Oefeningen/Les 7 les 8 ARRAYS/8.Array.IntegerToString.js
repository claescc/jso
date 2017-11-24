//------------------------------------------------------------------
//                     INTEGER to STRING
//------------------------------------------------------------------

/*Oefening
Schrijf een script dat voor een gegeven cijfer van 0 t.e.m. 9 dat cijfer als woord toont 
(bv. 8 wordt “acht”)

*/

//------------------------------------------------------------------


'use strict';

console.log('   PROGRAMMA: Cijfer to String     (4 = four)   ')

var toetsenbord = require('readline-sync');
var cijferX = parseInt(toetsenbord.question("Geef een cijfer in van 0-9:   "));
var ArrayWoorden = ["Null", "One", "Two", "Three", "Four", "Five", "six", "Seven", "Eight", "Nine"];

while(cijferX<0 || cijferX>9) {
    cijferX = parseInt(toetsenbord.question("ERROR:Geef een cijfer in van 0-9:   "));
}

console.log("Het woord is : %s ",ArrayWoorden[cijferX]);




//-----------------------Functies-----------------------------
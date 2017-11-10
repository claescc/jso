//------------------------------------------------------------------
//                     DOBBELSTEEN
//------------------------------------------------------------------

/*Oefening
Schrijf een script dat simuleert dat je 6000 keer met een dobbelsteen gooit en dat de frequentieverdeling van het aantal ogen toont, ttz: hoe vaak werd 1 gegooid, hoe vaak werd 2 gegooid, hoe vaak werd 3 gegooid, enz.

*/

//------------------------------------------------------------------


'use strict';

console.log('   PROGRAMMA: DOBBELSTEEN        ')

var toetsenbord = require('readline-sync');
var aantalGooien = parseInt(toetsenbord.question("Hoeveelkeer dobbelsteen gooien:   "));
var tellerStand = [0,0,0,0,0,0] // 6 plaatsen 
var gooi;

// console.log(randomNumbers()); // FUNCTIE WERKT !

for (var i = 0; i < aantalGooien; i++) {
    gooi = randomNumbers();                 // gooi wordt getal tussen 1-6
  //  tellerStand [gooi - 1] = tellerstand[gooi-1] + 1;      // gooi 4  --> -1 is positie 3 van array
  //  tellerStand[gooi-1] += 1;
    tellerStand[gooi-1]++;             // SNELLE SYNTAX 
}

console.log(tellerStand);

//-----------------------Functies-----------------------------
function randomNumbers() {
   return Math.floor(Math.random() * 6) + 1;
}
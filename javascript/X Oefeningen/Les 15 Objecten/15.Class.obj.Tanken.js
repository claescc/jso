//------------------------------------------------------------------
//                     FLUFFY HOND
//------------------------------------------------------------------

/*Oefening (array met objecten)
Ik heb van mijn laatste vijf tankbeurten bijgehouden hoeveel ik getankt heb en hoeveel kilometer ik gereden heb met die tank. Maak een klasse die de gegevens van één tankbeurt voorstelt (inhoud, afstand). Schrijf een script dat mij toelaat om die tankgegevens in te geven. Gebruik hiervoor een array met tankbeurten.  Als output moet het script het verbruik per 100 kilometer geven van mijn wagen.

*/

//------------------------------------------------------------------
'use strict';

console.log('   PROGRAMMA: Tanken       ')
var toetsenbord = require('readline-sync');

var aantalTankbeurten = parseInt(toetsenbord.question("aantal tankbeurten: "));
var tankbeurten = [];

for (var i = 0; i< aantalTankbeurten; i++){
    var liter = parseInt(toetsenbord.question("inhoud: "));
    var km = parseInt(toetsenbord.question("afstand: "));
    tankbeurten[i] = new ClassTankbeurt(liter,km);
}

console.log(tankbeurten);

//_____________________________________________
//ClassTankbeurt.prototype.verbruik100km = function(){}
var somAfstand=0;
var somHoeveelheid = 0;
for(var i=0; i < tankbeurten.length; i++){
    somAfstand += tankbeurten[i].afstand;
    somHoeveelheid += tankbeurten[i].inhoud;
}
console.log('Totale hoeveelheid brandstof = %d', somHoeveelheid);
console.log('Totale afstand = %d', somAfstand);
console.log('Verbruik per 100km = %d', 100 * somHoeveelheid/somAfstand);

//_____________________________________________

function ClassTankbeurt(inhoud, afstand) {
    this.inhoud = inhoud;
    this.afstand = afstand;
}









//-----------------------Functies-----------------------------
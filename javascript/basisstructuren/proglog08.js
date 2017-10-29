'use strict';

var toetsenbord = require('readline-sync');

const MAXIMUMBEDRAG = 100;              // onveranderlijk bedrag mmoet een constante worden !! 
const FORTISSTARTPRIJS = 3.75;
var fortisPrijs = FORTISSTARTPRIJS;
var alGekocht = 0.0;
var totaalAantal = 0;
var huidigeWaarde = 0.0;
do {
    var aantal = parseInt(toetsenbord.question("Geef aantal: "));
    alGekocht += aantal * fortisPrijs;  // wat ik al hebt gekocht 
    totaalAantal += aantal;         // wat ik gekocht heb erbij 
    huidigeWaarde = totaalAantal * fortisPrijs;
    console.log("U heeft al gekocht voor %d EUR.", alGekocht);
    console.log("De huidige waarde van uw portefeuille is: %d", huidigeWaarde);
    fortisPrijs -= .10;   // aandeel zakt al met 0.10 mag .10 geschreven worden 

} while (alGekocht < MAXIMUMBEDRAG);        
console.log("Uw geld is op.");

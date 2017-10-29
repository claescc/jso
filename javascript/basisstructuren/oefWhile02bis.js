'use strict';

var toetsenbord = require('readline-sync');
var som = 0, getal, aantal;

for(aantal=1; aantal <= 5; aantal++ ){  // 5 getallen 
    getal = toetsenbord.question("Geef getal "+aantal+": "); // vraag aan user GEEN PARSE INT controle
    while (isNaN(getal)) {  // Check of het een GETAL IS.. is not a number
        getal = toetsenbord.question("Geef getal "+aantal+": "); // whiles lus zolang niet en Getal
    }
    som = som + parseInt(getal); // nu chekcen of het een getal is
}   // som += parseInt(getal)
console.log("De som is %s", som); // na 5 keer pas de som tonen


//__________________________________________________________________________________


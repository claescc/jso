//------------------------------------------------------------------
//                     WERKGEVERS OVERUREN
//------------------------------------------------------------------

/*Oefening (array in object)
Werknemers in een firma moeten 37 uur werken per week. Schrijf een klasse die toelaat om voor de vijf werkdagen van de week in te geven hoeveel uren een bepaalde werknemer telkens gewerkt heeft. Maak een methode aantalOveruren die het aantal overuren geeft als resultaat. Maak een property voor de naam van de werknemer.  Om de werkuren van een bepaalde dag te kunnen veranderen, voorzie je een methode wijzigWerkuren waaraan je het nummer van de werkdag en het aantal uren van die werkdag doorgeeft.
Maak een werknemer, voer zijn werkuren van een week in en toon het aantal overuren. Als de werknemer minder dan 37 uur gewerkt heeft, moet de melding “Minder dan 37 uur gewerkt” op het scherm verschijnen.
*/

//------------------------------------------------------------------
'use strict';

console.log('   PROGRAMMA: Werkgevers Overuren  ')
var toetsenbord = require('readline-sync');

function Werknemer(naam) {
    this.naam = naam;
    this.werkuren = [];
}

//-----------------------Functies-----------------------------
Werknemer.prototype.wijzigWerkuren = function (dag, uren) {
    this.werkuren[dag] = uren;
}

Werknemer.prototype.aantalOveruren = function () {
    let som = 0;
    for (let i = 0; i < this.werkuren.length; i++) {
        som += this.werkuren[i];
    }
    if (som > 37) {
        return som - 37;
    }
    return som;
}

let naam = toetsenbord.question("naam werkgever: ")
let werkenemerA = new Werknemer(naam);

werkenemerA.wijzigWerkuren(0, 7);
werkenemerA.wijzigWerkuren(1, 6);
werkenemerA.wijzigWerkuren(2, 8);
werkenemerA.wijzigWerkuren(3, 8);
werkenemerA.wijzigWerkuren(4, 7);
/*
for ( let i = 0 ; i<5;i++){
    let uren = parseInt(toetsenbord.question("Gewerkte uren: "));
}
let uren = parseInt(toetsenbord.question("Gewerkte uren: "));
*/
werkenemerA.aantalOveruren();
console.log("The end")
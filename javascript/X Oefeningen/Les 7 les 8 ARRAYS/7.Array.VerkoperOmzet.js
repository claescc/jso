//------------------------------------------------------------------
//                     OMZET PER VERKOPER
//------------------------------------------------------------------

/*Oefening
Stel dat een firma vier verkopers heeft: Jan, Piet, Joris en Corneel. Schrijf een script dat aan de gebruiker een naam vraagt en een omzet. Deze omzet moet bij de omzet van de verkoper met die naam geteld worden. Het script moet deze gegevens blijven vragen tot de gebruiker als naam “einde” ingeeft. Daarna moet de totale omzet per verkoper getoond worden. Je mag ervan uit gaan dat de gebruiker geen verkeerde naam ingeeft.

*/

//------------------------------------------------------------------


'use strict';

console.log('   ARRAY: OMZET PER VERKOPER        ')

var toetsenbord = require('readline-sync');
var omzetVerkopers = [0,0,0,0];
var verkopers = ["Jan", "Piet", "Joris", "Corneel"]

// WHILE        " END "         loop inbouwen !!
//__________________________________________________________________

var naam = toetsenbord.question("Geef naam verkoper in:   ");
while (naam != "end") {
    
    if (verkopers.indexOf(naam) === -1) {    // not found
        console.log("Error: unknown verkoper");
       
    } else if (verkopers.indexOf(naam) > -1) {  // NAME FOUND !!
        var omzet = parseInt(toetsenbord.question("Geef omzet van verkoper in:   "));
        var positie = verkopers.indexOf(naam); // positie van naam

        // omzet + omzet 
        omzetVerkopers[positie] += omzet;    // omzet op zelfde positie als naam 
    }

    // vraag nieuwe naam of EINDE
    naam = toetsenbord.question("Geef naam verkoper in:   ");

}
console.log("verkopers = %s", verkopers);
console.log("omzetVerkopers = %s", omzetVerkopers);


/* ENKEL ALS ER 4 ZIJN EN MAAR 1X INGEVEN 
var aantalVerkopers = parseInt(toetsenbord.question("Hoeveel verkopers:  "));
for (var i = 0; i < aantalVerkopers; i++) {
    var naam = toetsenbord.question("Geef naam verkoper in:   ");
    arrayNamen[i] = naam;
    var omzet = toetsenbord.question("Geef omzet van verkoper in:   ",arrayNamen[i]);
    omzetVerkopers [i] = omzet;
}
 */



//-----------------------Functies-----------------------------
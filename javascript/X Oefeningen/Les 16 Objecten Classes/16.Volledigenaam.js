//------------------------------------------------------------------
//                     WERKGEVERS OVERUREN
//------------------------------------------------------------------

/*Oefening (array in object)
Werknemers in een firma moeten 37 uur werken per week. Schrijf een klasse die toelaat om voor de vijf werkdagen van de week in te geven hoeveel uren een bepaalde werknemer telkens gewerkt heeft. Maak een methode aantalOveruren die het aantal overuren geeft als resultaat. Maak een property voor de naam van de werknemer.  Om de werkuren van een bepaalde dag te kunnen veranderen, voorzie je een methode wijzigWerkuren waaraan je het nummer van de werkdag en het aantal uren van die werkdag doorgeeft.
Maak een werknemer, voer zijn werkuren van een week in en toon het aantal overuren. Als de werknemer minder dan 37 uur gewerkt heeft, moet de melding “Minder dan 37 uur gewerkt” op het scherm verschijnen.
*/

//------------------------------------------------------------------
'use strict';

var persoon1 = new Persoon("Kapot", "Isabel");

function Persoon(achter, voor) {
    this.achter = achter;
    this.voor = voor;
}

Persoon.prototype.volledigeNaam = function () {
    let volledige = this.voor + " " + this.achter.toUpperCase();
    return volledige;
}

Persoon.prototype.toString = function () {      // overschijf de auto functie ToString
    return this.volledigeNaam();
}

console.log(persoon1.volledigeNaam());
console.log(persoon1.toString());


//-----------------------UITBREIDING-----------------------------

function WerknemerObj(achternaam, voornaam, loon){
   // this.achternaam = achternaam;
   // this.voornaam = voornaam;
   Persoon.apply(this,arguments);
    this.loon = loon;
}
// INHERITANCE - OVERerving
// alle methodes die we al gedefinieerd hebben in persoon 
// moetn ook gebruikt kynnen wordne voor werknemer-Objecten.

WerknemerObj.prototype = new Persoon()
WerknemerObj.prototype.toString = function(){
    return this.volledigeNaam() + " krijgt een loon van "+this.loon;
}

var werknemer1 = new WerknemerObj("Stok", "Pol", 1234);
console.log(werknemer1.toString());
console.log(werknemer1.volledigeNaam()); // versie van werknemer !! overWritten

var werknemer2 = new WerknemerObj("Lesaffre", "Kristof", 2345);
werknemer2.volledigeNaam = function (){ // specifieke functie voor werknemner2
    return "Unieke fucntie voor W2 "+ this.voornaam+ " "+this.naam;
}
console.log(werknemer2.volledigeNaam());
console.log(werknemer1.volledigeNaam());
'use strict';

var toetsenbord = require('readline-sync');

function belgischeNaam(voornaam, achternaam) {
    return achternaam + ", " + voornaam;
}

function nederlandseNaam(voornaam, achternaam) {
    return gesplitsteNaam(achternaam) + ", " + voornaam; // schrijf functie voor gesplitsenaam
}

function gesplitsteNaam(naam) {                        // zoek in naam laatste index van spatie 
    var laatsteSpatie = naam.lastIndexOf(' '); // " " spatie 
    var result = naam;                          // voorlopig omdat achrenaam 1 woord kan zijn
    if (laatsteSpatie != -1) { // geen spatie 1 woord = -1
        result = naam.substring(laatsteSpatie + 1) + ", " + // ik wil stukje (vanaf laatste spatie + 1)
            naam.substring(0, laatsteSpatie); // ik wil uit naam een stukje  start 0 tot valkvoor positie
    }
    return result;
}

var naam = toetsenbord.question("naam: ");
var voornaam = toetsenbord.question("voornaam: ");
console.log("Belgisch formaat: %s", belgischeNaam(voornaam, naam));
console.log("Nederlands formaat: %s", nederlandseNaam(voornaam, naam));

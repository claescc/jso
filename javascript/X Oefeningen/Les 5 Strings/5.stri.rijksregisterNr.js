//------------------------------------------------------------------
//                     RIJKSREGISTER NUMMER
//------------------------------------------------------------------

/*Oefening

Een rijksregisternummer is opgebouwd als volgt: xxxxxx-xxx-xx waarbij x een cijfer is.
De eerste zes cijfers stellen de geboortedatum voor in het formaat JJMMDD
De volgende drie cijfers geven aan de hoeveelste geboorte van die dag het is, 
waarbij de even getallen gebruikt worden voor vrouwen en de oneven getallen voor mannen
De laatste twee cijfers vormen het controlegetal
Veronderstel dat de gebruiker een geldig rijksregisternummer ingeeft.
Schrijf een functie die voor een gegeven rijksregisternummer teruggeeft of het om een man of een vrouw gaat.
Schrijf een functie die voor een gegeven rijksregisternummer de leeftijd van die persoon teruggeeft.

88.06.02-446.24             
88060244624         */

//------------------------------------------------------------------


'use strict';

console.log('   PROGRAMMA: RIJKSREGISTER NUMMER       ')

var toetsenbord = require('readline-sync');
var rijksNr = toetsenbord.question("Rijksregisternummer:   ");

var gender = genderRijksNr(rijksNr);
console.log("Gender: %s", gender);


var leeftijd = leeftijdRijksNr(rijksNr);
console.log("Age: %s",leeftijd);

//-----------------------Functies-----------------------------

/*De volgende drie cijfers geven aan de hoeveelste geboorte van die dag het is, 
waarbij de even getallen gebruikt worden voor vrouwen en de oneven getallen voor mannen
880206 448 24
012345 678 910                                                                                      */

function genderRijksNr(x) {      // geef man of vrouw 
    var evenOneven = x.slice(6, 9);     //446
    var result = evenOneven % 2;
    if (result == 0) {          // VRAAGTEKEN OPERATOR ??????? VEEL KORTER
        result = "Female";      
        return result;          // 
    } else {
        result = "Male";
        return result;
    }

}

function leeftijdRijksNr(x) {        // geef leeftijd terug     88 06 02
                                                       //       01 23 45
// var vandaag = new Date();
// var huidigeDag = vandaag.getDate();
// var huidigeMaand = vandaag.getMonth()+1; // javascript telt 0 erbij dus +1
// var huidigJaar = vandaag.getFullYear();
    var jaar = x.slice(0,2);
    var maand = x.slice(2,4);       // slice() = substring() = substr() -> neemt stuk eruit
    var dag = x.slice(4,6);
    jaar = parseInt(jaar);      //controle laatste 2 cijfers nog insteken 
    var result =  117 -jaar;                                     // 117 = (2017 - 1900)
   // var result = "Jaar " + jaar + " maand " + maand + " dag " +dag; 
    return result;
    // return 1900 + 
    //en ook loop of return 2000+

    // REEDS VERJAARD? Zie Ann haar berekening Oef string 09.
}

/*
DATUM CONTROLE MOET ANDERS !!!

// laatste 2 cijfers van rrn (rijksregisternummer) vormen controlegetal

// Noem getal bestaande uit eerste 9 cijfers g, dan geldt

// ALS het controlegetal gelijk is aan 97 - (g % 97)

// DAN is de persoon geboren voor 2000

// ANDERS is de persoon geboren in 2000 of later
*/
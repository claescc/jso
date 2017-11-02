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
var rijksNr = parseInt(toetsenbord.question("Rijksregisternummer:   "));

var gender = genderRijksNr(xxx);
console.log("Gender: %s",gender);

var leeftijd = leeftijdRijksNr(xxx);
console.log("Age: %s",leeftijd);

//-----------------------Functies-----------------------------

/*De volgende drie cijfers geven aan de hoeveelste geboorte van die dag het is, 
waarbij de even getallen gebruikt worden voor vrouwen en de oneven getallen voor mannen*/

function genderRijksNr(x){      // geef man of vrouw terug

}


function leeftijdRijksNr(x){        // geef leeftijd terug

}
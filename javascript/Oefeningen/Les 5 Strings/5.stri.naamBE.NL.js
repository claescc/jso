//------------------------------------------------------------------
//                    NAAM BE & NL
//------------------------------------------------------------------

/*Oefening
A) Schrijf een functie belgischeNaam die een gegeven voornaam en naam teruggeeft in het formaat naam, voornaam.Bv.: Als we als voornaam Jos en als naam Van der Meulen opgeven, is het resultaat 

Van der Meulen, Jos.

B) Schrijf een functie nederlandseNaam die een gegeven voornaam en naam teruggeeft in het formaat laatste_stuk_van_naam, eerste_stuk_van_naam, voornaam. Bv.: Als we als voornaam Jos en als naam Van der Meulen opgeven, is het resultaat 

Meulen, Van der, Jos.

Voor namen die uit één stuk bestaan is er geen verschil tussen beide notaties.

*/

//------------------------------------------------------------------


'use strict';

console.log('   PROGRAMMA: NAAM NL & BE       ')

var toetsenbord = require('readline-sync');
var x = toetsenbord.question("voornaam:   ");
var y = toetsenbord.question("achternaam:   ");


var belgie = belgischeNaam(x,y);
console.log(belgie);


//-----------------------Functies-----------------------------

function belgischeNaam(x,y){
    var result = y + ", " + x + ".";
    return result;
}






function nederlandseNaam(x,y){ 
    var voornaam = x;
    var achternaam = y;       // in twee delen:    y1     y2
  
                                                //split achternaam in delen !
    var return = y.split(space,2)
    
    var result = y + ", " + x + ".";
    return result;
}


/*


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



B) Schrijf een functie nederlandseNaam die een gegeven voornaam en naam teruggeeft in het formaat laatste_stuk_van_naam, eerste_stuk_van_naam, voornaam. Bv.: Als we als voornaam Jos en als naam Van der Meulen opgeven, is het resultaat 

Meulen, Van der, Jos.

Voor namen die uit één stuk bestaan is er geen verschil tussen beide notaties.

*/
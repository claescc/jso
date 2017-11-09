//___________________________________________________________________________________________________
/* 
e. Laat de gebruiker eerst een bovengrens intikken.  
Vervolgens moet de gebruiker 10 keer het product van twee willekeurige, door het script gegenereerde, getallen tussen 1 en de bovengrens intikken.  
Het programma toont telkens of het antwoord juist of verkeerd is.  
Tel hoeveel oefeningen de gebruiker juist heeft opgelost. */
//___________________________________________________________________________________________________
//Randomgetal:
/*
function geefGetal() {
    var x = Math.floor((Math.random() * 10) + 1);            
    console.log("Random getal is %d", x);
    return x;
}

// bereken Product:
function evalueerProduct(x,y,z) {
    var tellerJuist = 0;
    var tellerFout = 0;
    var product = ( x * y);
    if (product === z) {
        console.log("JUIST         %s x %s = %s ", x, y, product);
    } else {
        console.log("FOUT          %s x %s = %s ", x, y, product);
    }
     
} 

// Geef random tot bovengrens
function geefGetalB(bovenG) {
    var x = Math.random();                
    x *= ( bovenG -1);                  
    x = Math.floor( 1 + x );            
    console.log("Random getal is %d", x);
    return x;
}
*/
function toonMeldingBijUitkomst(TF) {  // TF TRUE/FALSE
	var antwoordnr = geefGetal(4);
	if (TF == true) {
		switch (antwoordnr) {
			case 1: console.log("Goed zo !"); break;
			case 2: console.log("Uitstekend !"); break;
			case 3: console.log("Knap gedaan !"); break;
			case 4: console.log("Flink gewerkt !"); break;
		}
	}
	else {
		switch (antwoordnr) {
			case 1: console.log("Verkeerd !"); break;
			case 2: console.log("Dit is niet juist !"); break;
			case 3: console.log("Fout !"); break;
			case 4: console.log("Niet goed !"); break;
		}
	}
}


// -------------------------------functies--------------------------------------

'use strict';

console.log('Functie 10 keer product oplossen')

var toetsenbord = require('readline-sync');
var x = parseInt(toetsenbord.question("Input: geef bovengrens:  "));

// vraag 10 x twee Random getallen 
for (var i = 0; i <= 4; i++) {
    var a = geefGetalB(x);
    var b = geefGetalB(x);
    var c = parseInt(toetsenbord.question("Wat is " + a + " x " + b + " =  ")); 
    evalueerProduct(a,b,c);
    console.log(" ");
}


// hoeveel juist opgelost ?? 
console.log("The End."); 
*/

//___________________________________________________________________________________________________
/* 
f. Schrijf een functie toonMeldingBijTotaal die een evaluatie afdrukt van een door te geven totaal:

totaal minder dan 5 : onvoldoende
totaal = 5 of 6 : nog veel oefenen !
totaal = 7 : OK
totaal = 8 : een goede score !
totaal = 9 : heel goed !
totaal = 10: proficiat ! uitstekend ! 

Gebruik deze functie om op het einde van het script te evalueren hoe de gebruiker het oplossen van de sommen heeft gedaan.  (Geef het aantal juist opgeloste sommen door aan de functie.) */
//___________________________________________________________________________________________________


// Toon melding bij totaal:
function toonMeldingBijTotaal(x) {
    switch (x) {
        case x < 5:
            console.log("onvoldoende");
            break;
        case x == 5 || x == 6:
            console.log("nog veel oefenen!");
            break;
        case x == 7:
            console.log("OK");
            break;
        case x == 8:
            console.log("een goede score ");
            break;
        case x == 9:
            console.log("heel goed !");
            break;
        case x == 10:
            console.log("proficiat ! uitstekend !");
            break;
        default:
            break;
    }
     
} 
// bereken Product:
function evalueerProduct(x,y,z) {
    return x * y == z;  // kan een true of false zetten na een functie !!
    // return is z --> dus kan je oproepen!!
} 

// Geef random tot bovengrens
function geefGetalB(bovenG) {
    var x = Math.random();                
    x *= ( bovenG -1);                  
    x = Math.floor( 1 + x );            
    console.log("Random getal is %d", x);
    return x;
}


// -------------------------------functies--------------------------------------

'use strict';

console.log('Functie 4 keer product oplossen')

var toetsenbord = require('readline-sync');
var x = parseInt(toetsenbord.question("Input: geef bovengrens:  "));

// vraag 10 x twee Random getallen (test met 4)
for (var i = 1; i <= 4; i++) {
    var a = geefGetalB(x);
    var b = geefGetalB(x);
    var c = parseInt(toetsenbord.question("Wat is " + a + " x " + b + " =  ")); 
    var trueFalse =  evalueerProduct(a,b,c);  //uitkomst calc zetten in trueFalse in functie is = (z)
    toonMeldingBijUitkomst(trueFalse);

   // read word ??  if bv (bank.toUpperCase() != "KAUPTHING") ???
    // var cijfer = 
    console.log(" ");
}

// hoeveel juist opgelost ??
toonMeldingBijTotaal(cijfer);

console.log("The End."); 


//___________________________________________________________________________________________________
/* 

g. Pas de functie toonMeldingBijUitkomst aan zodat niet steeds hetzelfde bericht getoond wordt als een berekening goed of fout opgelost is.  Dit kun je doen door b.v. 4 goede en 4 foute “berichten” te voorzien.  Genereer een willekeurig getal tussen 1 en 4 om te bepalen welke van die 4 berichten je toont. */
//___________________________________________________________________________________________________



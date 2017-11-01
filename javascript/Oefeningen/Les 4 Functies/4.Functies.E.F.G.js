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
    evalueerProduct(a,b,c);

   // read word ??  if bv (bank.toUpperCase() != "KAUPTHING") ???
    // var cijfer = 
    console.log(" ");
}

// hoeveel juist opgelost ??
toonMeldingBijTotaal(cijfer);

console.log("The End."); 
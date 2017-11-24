//___________________________________________________________________________________________________
/* 
c. Schrijf een functie evalueerProduct met 3 parameters.  Als de derde parameter het product is van de voorgaande parameters, geeft deze functie true terug; anders geeft deze functie false terug. 

Test deze functie door aan de gebruiker te vragen om het product van twee willekeurige, door het script gegenereerde, getallen in te tikken en te controleren of dit product juist is.. */

//___________________________________________________________________________________________________
/*
'use strict';       

console.log('Functie EvolueerProduct 3 parameters')
var toetsenbord = require('readline-sync');
var a = parseInt(toetsenbord.question("Input: geef getal:  "));
var b = parseInt(toetsenbord.question("Input: geef maaltafel:  "));
var c = parseInt(toetsenbord.question("Input: geef hun product:  "));

evalueerProduct(a,b,c);

function evalueerProduct(x,y,z) {           // Alles zelf in te geven
    var product = ( x * y);
    if (product === z) {
        console.log("True    %s x %s = %s ", x, y, product);
    } else {
        console.log("False    %s x %s = %s ", x, y, product);
    } 
    console.log("The End.");  
}
*/
//___________________________________________________________________________________________________
/* 
c. Schrijf een functie evalueerProduct met 3 parameters.  Als de derde parameter het product is van de voorgaande parameters, geeft deze functie true terug; anders geeft deze functie false terug. 

Test deze functie door aan de gebruiker te vragen om het product van twee willekeurige, door het script gegenereerde, getallen in te tikken en te controleren of dit product juist is.. */

//___________________________________________________________________________________________________
/*
'use strict';

console.log('Functie EvolueerProduct 3 parameters');         // Random A en B 
var toetsenbord = require('readline-sync');

// vraag 1ste Random getal 
var a = geefGetal();
var b = geefGetal();

function geefGetal() {
    var x = Math.floor((Math.random() * 10) + 1);            
    console.log("Random getal is %d", x);
    return x;
}
var c = parseInt(toetsenbord.question("Wat is " + a + " x " + b + " =  ")); 

evalueerProduct(a,b,c);

function evalueerProduct(x,y,z) {
    var product = ( x * y);
    if (product === z) {
        console.log("True    %s x %s = %s ", x, y, product);
    } else {
        console.log("False    %s x %s = %s ", x, y, product);
    } 
    console.log("The End.");  
} 
*/
//___________________________________________________________________________________________________
/* 
d. Schrijf een functie toonMeldingBijUitkomst met één parameter.

 Als het argument true is, toont de functie de melding “juist”, 
 anders toont de functie de melding “fout”. 

 Test deze functie door aan de gebruiker te vragen om het product van twee willekeurige, door het script gegenereerde, getallen in te tikken en te tonen of dit product juist is. */

//___________________________________________________________________________________________________
//Randomgetal:
function geefGetal() {
    var x = Math.floor((Math.random() * 10) + 1);            
    console.log("Random getal is %d", x);
    return x;
}

// bereken Product:
function evalueerProduct(x,y,z) {
    var product = ( x * y);
    if (product === z) {
        console.log("JUIST    %s x %s = %s ", x, y, product);
    } else {
        console.log("FOUT    %s x %s = %s ", x, y, product);
    }  
} 


// -------------------------------functies--------------------------------------

'use strict';

console.log('Functie toonMeldingBijUitkomst met 1 parameters');         
var toetsenbord = require('readline-sync');

// vraag twee Random getallen 
var a = geefGetal();
var b = geefGetal();
var c = parseInt(toetsenbord.question("Wat is " + a + " x " + b + " =  ")); 
evalueerProduct(a,b,c);
console.log("The End."); 


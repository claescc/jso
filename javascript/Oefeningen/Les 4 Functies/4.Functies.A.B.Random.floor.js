//___________________________________________________________________________________________________
/* Math.random() genereert een willekeurig decimaal getal tussen 0 (incl) en 1 (excl)
Math.floor(x) neemt van (decimaal) getal x het gedeelte voor de komma. // rond kommagetal af naar onder
Math.ceiling() rond af naar boven

a. Schrijf een functie geefGetal die een willekeurig getal genereert tussen 1 en een door te geven bovengrens. */
//___________________________________________________________________________________________________

/*
'use strict';

console.log('Functie Random Floor 1')

var toetsenbord = require('readline-sync');
var y = parseInt(toetsenbord.question("Input: geef bovengrens:  "));

geefGetal(y);

function geefGetal(bovenG) {
    var x = Math.random();                // geeft altijd een kommagetal tussen 0 en 1 (0.1 - 0.9)
    x *= ( bovenG -1);                   // -1 omdat het tussen 0-10 is dus 10 moet ni weergeven worden.
    x = Math.floor( 1 + x );            // +1 is voor geen 0 te krijgen. Floor = x afronde naar beneden
    console.log("De bovengrens is %d", x);
}
*/ 

//___________________________________________________________________________________________________
/* 
Math.random() genereert een willekeurig decimaal getal tussen 0 (incl) en 1 (excl)
Math.floor(x) neemt van (decimaal) getal x het gedeelte voor de komma. // rond kommagetal af naar onder
Math.ceiling() rond af naar boven

b. Gebruik geefGetal om 2 willekeurige getallen te genereren tussen 1 en een door de gebruiker in te geven bovengrens. */

//___________________________________________________________________________________________________
'use strict';

console.log('Functie Random Floor 2')

var toetsenbord = require('readline-sync');
var y = parseInt(toetsenbord.question("Input: geef bovengrens:  "));

geef2Getallen(y);

function geef2Getallen(bovenG) {
    var x = Math.random(); 
    var z = Math.random();               // geeft altijd een kommagetal tussen 0 en 1 (0.1 - 0.9)
    x *= ( bovenG -1);                   // -1 omdat het tussen 0-10 is dus 10 moet ni weergeven worden.
    z *= ( bovenG -1);                   // -1 omdat het tussen 0-10 is dus 10 moet ni weergeven worden.
    x = Math.floor( 1 + x );            // +1 is voor geen 0 te krijgen. Floor = x afronde naar beneden
    z = Math.floor( 1 + z );            // +1 is voor geen 0 te krijgen. Floor = x afronde naar beneden
    console.log("1ste getal is %d en 2de getal is %s.", x, z);
}
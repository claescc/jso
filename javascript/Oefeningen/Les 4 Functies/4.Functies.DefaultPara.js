//___________________________________________________________________________________________________
/*
                            JavaScript: Default parameters functie oefeningen

a. Schrijf een functie tekenLijn die een lijn bestaande uit 25 gelijkheidstekens (=) op het scherm tekent. 
b. Breid de functie uit: als een aantal doorgegeven wordt, teken je een lijn bestaande uit aantal gelijkheidstekens, anders teken je een lijn bestaande uit 25 gelijkheidstekens
c. Breid de functie uit: als een aantal en een karakter doorgegeven wordt, teken je een lijn bestaande uit aantal karakters. Als alleen een aantal doorgegeven wordt, teken je een lijn bestaande uit aantal gelijkheidstekens. In alle andere gevallen teken je een lijn bestaande uit 25 gelijkheidstekens
Het script 
tekenLijn();
tekenLijn(10);
tekenLijn(20, "*");
Zou volgende uitvoer moeten geven:
=========================
==========
********************
d. Gebruik de functie om een rechthoekige driehoek opgevuld met sterretjes (*) te tekenen*/
//___________________________________________________________________________________________________

function tekenLijn(x="25",y="=") {
    var lijn = "";
    var teken = y;
    for(var i=1; i <= x;i++){                
       lijn += y;
    }
    console.log(lijn);           // returns undefined
}

//---------------------
'use strict';
console.log('Functie: Tekenlijn');
var toetsenbord = require('readline-sync');

tekenLijn();
tekenLijn(10);
tekenLijn(20, "*");

// d. Gebruik de functie om een rechthoekige driehoek opgevuld met sterretjes (*) te tekenen*/

var zijde3Hoek = parseInt(toetsenbord.question("Geef zijde 3 hoek in:  "));
var symbol = toetsenbord.question("Geef symbool in:  ");

for (var i = 1; i <= zijde3Hoek; i++) {
    var zijdeL = i;
    tekenLijn(zijdeL,symbol);
}
console.log('The End.');

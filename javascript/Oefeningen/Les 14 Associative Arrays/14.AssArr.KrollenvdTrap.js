/*
oefening
Laat de gebruiker een zin invoeren.
Tel het aantal woorden in de zin (veronderstel dat twee woorden gescheiden worden door een spatie).
Tel het aantal karakters in de zin.
Bepaal voor al de woorden in de zin hoe vaak ze voorkomen.  Maak hierbij geen onderscheid tussen hoofdletters en kleine letters.

b.v.   :
zin:  De kat van moemoe krabt de krollen van de trap van ons moemoe.
aantal woorden: 13
aantal karakters: 62
overzicht:		woord		voorkomen
de		3
kat		1
van		3
moemoe	2
krabt	1
krollen	1
trap	1
ons		1
 */

'use strict';
console.log("Programma: WOORDEN TELLEN")
var toetsenbord = require('readline-sync');
var assoArray = new Array();
var woordenArray = new Array();
var woord;


var zinX = toetsenbord.question("Geef een zin:   ");
console.log("Aantal karakters: ",zinX.length);

var aantalLetters = countLetters(zinX);
console.log("Aantal letters: ",aantalLetters);

//--------------------------------------------
woordenArray = aantalWoorden(zinX);
//console.log(woordenArray);

var hoeveelWoordenTot = woordenArray.length;
console.log("Aantal woorden: ",hoeveelWoordenTot);
//_________________________________________________________________________________
function aantalWoorden(x){              // woorden gescheiden door spaties..  vindt de spaties?
   var words = x.split(" ");
    return words;
}

function countLetters(y){ //zin: "Hey, kat."  
    var stringX = y;
    var geenSpaties = stringX.replace(/ /g,'');
    var geenPunten = geenSpaties.replace(/[.]/g,'');
    var stringLettersOnly = geenPunten.replace(/,/g,'');
    return stringLettersOnly.length;
    }
//_________________________________________________________________________________

for (var i = 0; i < woordenArray.length; i++) {
    woord = woordenArray[i];
    if (assoArray[woord] == null) { 
        assoArray[woord] = 0; 
    }      
    assoArray[woord]++;
}
console.log("____________________________________");
console.log("OVERZICHT:\t WOORD\t\t AANTAL");
console.log("____________________________________");

for (woord in assoArray) {  // overloop alle indexen van ASS Array 
    console.log(".\t\t %s \t\t : %s ", woord, assoArray[woord]);
} 
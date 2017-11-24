
//------------------------------------------------------------------
//                    MAGISCHE VIERKANT
//------------------------------------------------------------------
/*Oefening
Een magisch vierkant is een vierkant met getallen, waarbij de som van de getallen voor elke rij, 
elke kolom en elke diagonaal gelijk is.
Bijvoorbeeld:

 rij     0  1  2  3
     0   x  x  x  x            16 03 02 13           TABELEN IN TABELEN
 kol 1   x  x  x  x            05 10 11 08
     2   x  x  x  x            09 06 07 12
     3   x  x  x  x            04 15 14 01

Schrijf een functie die voor een gegeven array
controleert of dit een vierkant is (aantal rijen == aantal kolommen)

als het een vierkant is aan de gebruiker vraagt om alle getallen van het vierkant in te voeren (en de ingevoerde getallen in de array plaatst)
Schrijf een functie die teruggeeft of een gegeven array al dan niet een magisch vierkant is.*/
//------------------------------------------------------------------
'use strict';

console.log('   PROGRAMMA: MAGISCHE VIERKANT        ')

var toetsenbord = require('readline-sync');
//var x = parseInt(toetsenbord.question("Input:   "));

var gegevenArray = [];
var magicVakken = 4;
var vakje;
var magicTabel = new Array(magicVakken);

for (vakje = 0; vakje < magicVakken; vakje++) { // allocatie van kolommen van tabel
    magicTabel[vakje] = new Array(4);
}

leesTweeDimTabel(magicTabel, "Geef cijfer in:  ");
toonTweeDimTabel(magicTabel, "Magic vierkant:");
somMagic(magicTabel, "Magic som:");




//-----------------------Functies-----------------------------

function leesTweeDimTabel(tabel, hoofding) {
    var rij, kol;
    for (rij = 0; rij < tabel.length; rij++) {
        for (kol = 0; kol < tabel[rij].length; kol++) {
            tabel[rij][kol] = parseInt(toetsenbord.question(hoofding + (rij + 1) + "(" + (kol + 1) + ") "));
        }
    }
}
function toonTweeDimTabel(tabel, hoofding) {
    var rij, kol, result = hoofding;
    for (rij = 0; rij < tabel.length; rij++) {
        result += "\n";
        for (kol = 0; kol < tabel[rij].length; kol++) {
            result += "\t" + tabel[rij][kol];
        }
    }
    console.log(result);
}


function somMagic() {
    var somMag = 0;
    var somresult = 24;
    var rij0 = 0;

    for (var rij = 0; rij < magicTabel.length; rij++) {                // rij overlopen // rij++
        for (var kolom = 0; kolom < magicTabel[rij].length; kolom++) {
            
           

           



            // if (somMag === somresult) {
            //  console.log("somMag = %s and rij = %s", somMag, rij);
        }
    }
   
 console.log(somMag);
}

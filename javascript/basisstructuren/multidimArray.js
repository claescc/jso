'use strict';

var toetsenbord = require('readline-sync');

var aantalVakken = 3, vak;
var puntenTabel = new Array(aantalVakken);

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


/****** HOOFDPROGRAMMA ******/
// allocatie van kolommen van tabel
for (vak = 0; vak < aantalVakken; vak++) {
  puntenTabel[vak] = new Array(5);
}

leesTweeDimTabel(puntenTabel, "Geef punten voor vak ");
toonTweeDimTabel(puntenTabel, "Behaalde punten");

/* oefening: */
// geef hoogst behaalde cijfer terug van alle punten 

console.log(puntenTabel);

console.log("__________________________");
console.log("Het maximum = %d", maximum(puntenTabel));


//console.log("hoogtse cijfer = %s", hoogsteCijfer);


function maximum(){ // Not a Number ??
  var hoogsteCijfer = 0;
  for (var rij = 0; rij < puntenTabel.length; rij++){                // rij overlopen // rij++
    for (var kolom= 0; kolom <puntenTabel[rij].length; kolom++){  // Kolommen overlopen
                 if (hoogsteCijfer<puntenTabel[rij][kolom] ) {  // rij = 0 kolom ++
                   hoogsteCijfer = puntenTabel[rij][kolom] ;    // kolom op rij 0 
                 }                                              // kolom op rij 1
  
    }    
  }
return hoogsteCijfer;

}

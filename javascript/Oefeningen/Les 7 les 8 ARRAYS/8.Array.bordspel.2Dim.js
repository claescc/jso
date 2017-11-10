'use strict'

const AANTALRIJEN = 4, AANTALKOLOMMEN = 3;

// declartie en creatie 2 DIMENSIONALE ARRAY !!!! 
var speelbord = new Array(AANTALRIJEN);
for (var i=0; i<speelbord.length; i++){
    speelbord[i]= new Array(AANTALKOLOMMEN);
}

/*  rij  0 1 2
     0   x x x       00 01 02           TABELEN IN TABELEN
 kol 1   x x x       10 11 12
     2   x x x       20 21 22
     3   x x x       30 31 32
*/

for (var rij = 0; rij < speelbord.length; rij++){                // rij overlopen
    for (var kolom= 0; kolom <speelbord[rij].length; kolom++){  // Kolommen overlopen
        speelbord[rij][kolom] = rij + " " + kolom;              
    }
}
// ter controle
console.log(speelbord);
/* PRINT:
  [  [ '0 0', '0 1', '0 2' ],
     [ '1 0', '1 1', '1 2' ],
     [ '2 0', '2 1', '2 2' ],
     [ '3 0', '3 1', '3 2' ]     ]      Array in an array in arrays enz.. */



// Array op scherm tonen  
var result = "";
for (var rij = 0; rij < speelbord.length; rij++){                // rij overlopen
    result = ""; // leeg maken terug ! 
    for (kolom= 0; kolom <speelbord[rij].length; kolom++){  // Kolommen overlopen
        result += speelbord[rij][kolom] +"\t";          // result wordt anders groter en groter PAS OP!       
    }
    console.log(result);
}
/* 
/* PRINT:
        0 0     0 1     0 2
        1 0     1 1     1 2
        2 0     2 1     2 2
        3 0     3 1     3 2  */
    


//______________________________________________________________ Voor liefhebbers !!!!!!!!!!!!!
//  SPREAD OPERATOR 2 DIMENSIONAAL ARRAY
console.log(...speelbord); // log(speelbord[0]),log(speelbord[1]),log(speelbord[2])... ect

for(rij =0; rij<speelbord.length; rij++){
    var huidigeRij = speelbord[rij];
    console.log(...huidigeRij);
}


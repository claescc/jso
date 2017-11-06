'use strict'
var toetsenbord = require('readline-sync');
var aantalExamens = parseInt(toetsenbord.question("Geef aantal examens in : "));
var gewichtTot = 0;
var scoreTot = 0;

for (var i = 0; i < aantalExamens; i++) {
    var gewicht = parseInt(toetsenbord.question("Geef studie punten in : "));
    gewichtTot += gewicht;
    var score = parseInt(toetsenbord.question("Geef examen score in : "));
    while (score<0 && score >20) {
        var score = parseInt(toetsenbord.question("fout:Geef examen score in : ")); ;
    }
    scoreTot += score;
}
console.log("gewichtTot = %s  scoreTot= %s", gewichtTot, scoreTot);
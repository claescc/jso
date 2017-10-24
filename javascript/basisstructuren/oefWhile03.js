'use strict';
var toetsenbord = require('readline-sync');
var result, geslacht, leeftijd, jongeVrouwen = 0, realWoman = 0, jongeMannen = 0, realMen = 0;
geslacht = toetsenbord.question("Geef geslacht (m/v): ");
while ((geslacht == "m") || (geslacht == "v")) { // zowel het een m of een v is dan leeftijd
    leeftijd = toetsenbord.question("Geef leeftijd: "); //maak getal van 
    leeftijd = parseInt(leeftijd);
    if (geslacht == "m") {  // als m is dan check leeftijd
        if (leeftijd < 25) {
            jongeMannen = jongeMannen + 1;
        }
        else {
            realMen = realMen + 1; // anders is het een Realman
        }
    }
    else { // is het een v dan check leeftijd
        if (leeftijd < 25) {
            jongeVrouwen = jongeVrouwen + 1; // vrouw
        }
        else {
            realWoman = realWoman + 1; // real woman 
        }
    }
    geslacht = toetsenbord.question("Geef geslacht (m/v): ");
}
result = "\t<25\t>=25\nmannen\t"+jongeMannen+"\t"+realMen+"\nvrouwen\t"+jongeVrouwen+"\t"+realWoman;
console.log(result);   // tab toets tussen "\t" dus '\t tex text'
                        // new line '\n' dus '\n text text '

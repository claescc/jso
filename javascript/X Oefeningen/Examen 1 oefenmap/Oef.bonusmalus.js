//------------------------------------------------------------------
//                 FUNCTIE  BONUS-MALUS
//------------------------------------------------------------------
/*

Schrijf een functie die de nieuwe bonus-malustrap van een autoverzekering teruggeeft, gegeven de huidige bonus-malustrap en het aantal ongevallen waarvoor een schade vergoed werd. 
Berekeningswijze:
•	De trap is minimum 1 en maximum 18
•	Als er geen ongevallen zijn, is er een daling van 1 trap
•	Het eerste ongeval veroorzaakt een stijging van 2 trappen
•	De volgende ongevallen geven een stijging van 3 trappen per ongeval

Zorg ervoor dat de nieuwe bonus-malustrap tussen 1 en 18 blijft.

Test deze functie door aan de gebruiker de huidige bonus-malus en het aantal ongevallen te vragen en de nieuwe bonus-malus te tonen.  Als trap 18 bereikt is, toon je een melding om de klant te laten weten dat hij een andere verzekeringsmaatschappij moet zoeken.

     
*/
//------------------------------------------------------------------

'use strict';

console.log('   PROGRAMMA: Bonus-malus      ')

var toetsenbord = require('readline-sync');
var startbm = parseInt(toetsenbord.question("Geef huidige bonus-malus:   "));
var ongevallen = parseInt(toetsenbord.question("Geef aantal ongevallen in:"));

bonusMalus(startbm, ongevallen);
console.log('The end');

// toon nieuwe bonus-malus      of  bij TRAP 18 nieuwe verzekering zoeken.

//-----------------------Functies-----------------------------

function bonusMalus(x, y) {
    if (x < 1 || x > 18) {
        console.log('Error: bonus-malus moet tussen 1-18 zijn.');
    } else {
        switch (y) {
            case 0:
                x--;
                break;
            case 1:
                x += 2;
                break;
            case 2:
                x += 5;
                break;
            case 3:
                x += 8;
                break;
            case 4:
                x += 11;
                break;
            case 5:
                x += 14;
                break;
            case 6:
                x += 17;
                break;
            default:
                console.log('Te veel ongevallen: zoek een nieuwe verzerkering');
                break;
        }
        if (x > 18) {
            console.log('Te veel ongevallen: zoek een nieuwe verzerkering');
        } else {

            console.log('Bonus-malus = %s', x);
        }
    }
}

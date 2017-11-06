//------------------------------------------------------------------
//                 FUNCTIE  FIBONACCI
//------------------------------------------------------------------
/*
De rij met de getallen van Fibonacci ziet eruit als volgt:  1   1   2   3   5   8   13   21   34   55 …

Het eerste en het tweede getal zijn 1, en de volgende getallen zijn gelijk aan de som van de twee vorige getallen.

Schrijf een functie die het nde getal uit deze rij teruggeeft voor een gegeven n.

Test deze functie door de eerste 10 getallen uit de rij te tonen.               
                                                                                                */
//------------------------------------------------------------------

'use strict';

console.log('   PROGRAMMA: Fibonacci        ')

var toetsenbord = require('readline-sync');
var x = parseInt(toetsenbord.question("Fibonacci stappen uit te voeren:   "));






//-----------------------Functies-----------------------------
//De rij met de getallen van Fibonacci ziet eruit als volgt:  1   1   2   3   5   8   13   21   34   55 …
//Het eerste en het tweede getal zijn 1, en de volgende getallen zijn gelijk aan de som van de twee vorige getallen.

function Fibonacci(x) {
    var a = 1, b = 0;
    var som;

    while (x >= 0) {
        som = a;
        a = a + b;
        b = som;
        x--;
    }

    return b;
}
  


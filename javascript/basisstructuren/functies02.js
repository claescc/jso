'use strict';

var toetsenbord = require('readline-sync');

var getal1, getal2, macht;

/* functiedefinities of -declaraties */
function berekenTweedeMacht(getal) {
    var resultaat;                          // met welk var gaan we berekenen
    resultaat = getal * getal;              // berekening
    return resultaat;                       //result
}

function berekenMacht(grondtal, exponent){
    var resultaat = 1;
    for(var i=1; i<= exponent; i++){
        resultaat *= grondtal;
    }
    return resultaat;
}

/* de volgorde en plaats van de functiedefinities is onbelangrijk */

// functies oproepen ("gebruiken")
getal1 = toetsenbord.question("Geef eerste getal: ");
macht = berekenTweedeMacht(getal1) ;
console.log("Het getal %d vermenigvuldigd met zichzelf is %d", getal1, macht);
getal2 = toetsenbord.question("Geef tweede getal: ");  
macht = berekenTweedeMacht(getal2);
console.log("Het getal %d vermenigvuldigd met zichzelf is %d", getal2, macht);

//------------------------------------------------------------------------------

// macht berekening 

macht = berekenMacht(getal1, getal2);
console.log("%d tot de %de macht is %d", getal1, getal2, macht);

function berekenMecht(grondtal, exponent){    // lus maken voor exponent keer maal grodntal
    var resultaat = 1;                             // moet begin waarde 1 krijgen !! 1*0 is 1
        for ( var i = 1; i <= exponent; i++){  // FOR loop
            resultaat *= grondtal;
        }
    }
    return resulaat;
}

// maakt niet uit waar de functie staat ! 

macht = berekenMacht(getal1+5, 2*getal2+8); // rekent eerst uit (1+5) komt in plaats van grondtal
    // de parameters  of argumenten mogen ook berekeningen zijn  // (2*getal2+8) is dan de exponent


macht = berekenMacht(getal1-1, getal2);   // als argument mag een berekening doorgegeven worden
console.log("%d tot de %de macht is %d", getal1, getal2, macht); 

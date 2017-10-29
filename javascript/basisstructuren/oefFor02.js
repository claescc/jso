'use strict';
for (var tafel = 1; tafel <= 5; tafel++) {  // we gaan iets doen voor 5 tafel !
    if (tafel % 2 == 1) { // tafel is oneven
        console.log("Dit is de tafel van %d:", tafel);      // dit is voor de tafel van..
        for (var factor = 1; factor <= 10; factor++) {      // we tonen dit met for lus gaat 10 keer iets doen
            console.log("%d x %d = %d", factor, tafel, factor * tafel); // uitkomst tafel
        }
    }
}
/// twee FOR LUSSEN

'use strict';
for (var tafel = 1; tafel <= 5; tafel++) {  // on even tafels tonen tafel +=2
    if (tafel % 2 == 1) { // tafel is oneven 2/2 rest is niet 1 dus even MOD OPERATOR %
        console.log("Dit is de tafel van %d:", tafel);      // dit is voor de tafel van..
        for (var factor = 1; factor <= 10; factor++) {      // we tonen dit met for lus gaat 10 keer iets doen
            console.log("%d x %d = %d", factor, tafel, factor * tafel); // uitkomst tafel
        }
    }
}
/// twee FOR LUSSEN

/*_________________________________________________________________
                            MAAL TAFELS 
 ________________________________________________________________ */

'use strict';

var toetsenbord = require('readline-sync');
var maalTafels = parseInt(toetsenbord.question("Geef aantal maaltafels in: "));
var aantal = 10;
var som;
var teller = 0;
var tafel = 0

for (var teller = 0; teller <= maalTafels; teller++) { // hoeveel tafels laten we zien

    var tafel = tafel + 1           // dit moet 5 keer gaan 
    for (var teller = 0; teller <= aantal; teller++) {
        som = (teller * tafel)
        console.log("%s x %s = %s\n", teller, tafel, som);
    }


}

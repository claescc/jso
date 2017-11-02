/* OEFENING EXAMEN PREP

BOEKENBEURS:

1. Inkom telt hoeveel vrouwen en mannen binnenkomen. invoer 'm' of 'v' of 's' STOP
1.2 controle invoer m v of s loop
2. Hoeveel korting krijgt deze persoon. invoer korting 0-100
2.2 controle invoer 0-100 loop
3. Om de 4 mensen bodycount. Output bodycount vrouwen en bodycount mannen. TUSSENSTAND
4. Einde telling druk 's'. output totaal mannen en totaal vrouwen en gemiddelde korting.

*/

'use strict';

console.log('Boekenbeurs teller\n')

var toetsenbord = require('readline-sync');
var inputBoek = toetsenbord.question("Input: female 'f', male 'm' or 's' to stop: ");
var aantalVrouwen = 0;
var aantalMannen = 0;
var totaalMensen = 0;
var somKortingen = 0;

// CONTROLE invoer moet f, m of s zijn 
while (inputBoek != 'f' && inputBoek != 'm' && inputBoek != 's') {
    var inputBoek = toetsenbord.question("ERROR: input must be 'f', 'm' or 's' to stop: ");
}

// invoer ok? controle op STOP   
//console.log('invoer ok!');

while (inputBoek != 's') {              // zo lang er niet op Stop wordt gedrukt dan...
    // man of vrouw teller 
    if (inputBoek == 'f') {
        aantalVrouwen++;
        //console.log('vrouwen +1 = %s totaal', aantalVrouwen);

    } else {
        aantalMannen++;
        //console.log('mannen +1 = %s totaal', aantalMannen);
    }
    totaalMensen++;
     // MOD loop om de 4 personen!
     var pplMod = totaalMensen % 4;
    if (pplMod == 0) {
        console.log('Tussenstand: bezoekers = %s\n vrouwen = %s\n mannen = %s', totaalMensen, aantalVrouwen, aantalMannen);   
    }
    
    //vraag korting  
    var inputKorting = parseInt(toetsenbord.question("Input: korting 0-100: "));
    while (inputKorting<0 || inputKorting>100) {
        var inputKorting = parseInt(toetsenbord.question("ERROR: korting moet tussen de 0-100 zijn: "));  
     }         
    // korting ok !
    //console.log('Korting controle ok!')
    // tel alle kortingen op voor gemiddelde later te berekenen.
    somKortingen += inputKorting;
    //console.log('som alle kortingen = %s', somKortingen);
    // end loop or add new person
    var inputBoek = toetsenbord.question("Input: female 'f', male 'm' or 's' to stop: ");
    // CONTROLE invoer moet f, m of s zijn 
        while (inputBoek != 'f' && inputBoek != 'm' && inputBoek != 's') {
            var inputBoek = toetsenbord.question("ERROR: input must be 'f', 'm' or 's' to stop: ");
        }
}
// stop gedrukt
console.log('Totaal aantal mensen %s waarvan %s vrouwen en %s mannen', totaalMensen, aantalVrouwen, aantalMannen);
// bereken gemiddele
var gemiddeldeK = somKortingen/totaalMensen;
gemiddeldeK = gemiddeldeK.toFixed(2);
console.log('Gemiddelde aantal korting: %s', gemiddeldeK);

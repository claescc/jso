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

// CONTROLE invoer moet f, m of s zijn 
while ((inputBoek != 'f') && (inputBoek != 'm') && (inputBoek != 's')) {
    var inputBoek = toetsenbord.question("ERROR: input must be 'f', 'm' or 's' to stop: ");
}

// invoer ok? controle op STOP              
while (inputBoek != 's') {              // zo lang er niet op Stop wordt gedrukt dan...
    // man of vrouw teller 
    if (inputBoek == 'f') {
        aantalVrouwen++;
    } else {
        aantalMannen++;
    }
    totaalMensen++;
    console.log('Totaal aantal mensen %s waarvan %s vrouwen en %s mannen', totaalMensen, aantalVrouwen, aantalMannen);
    //vraag korting 
    var inputKorting = toetsenbord.question("Input: korting 0-100: ");
}


// stop samenvatting totaal


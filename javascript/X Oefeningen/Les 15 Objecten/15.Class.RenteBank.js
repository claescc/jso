//------------------------------------------------------------------
//                     BANK RENTE
//------------------------------------------------------------------

/*Obp04: Maak een klasse “Rekening”. Een rekening-object moet de volgende eigenschappen hebben: beginJaar, eindJaar, startBedrag en rente. Al deze eigenschappen zijn integers. De gebruiker moet na het invullen van al deze gegevens het gespaarde bedrag kunnen opvragen dat je krijgt in “eindJaar” door in “beginJaar” “startBedrag” te beleggen tegen “rente” %. Met hety script in oefobp04_start.js moet je de volgende output krijgen:
1000 EUR belegd tegen 4 % in 2000 geeft in het jaar 2010 als eindbedrag 1480,24
*/

//----------------------- klasse = Constructor -----------------------------
'use strict';
function Rekening(beginJaar, eindJaar, rente, startbedrag) {
    this.beginjaar = beginJaar;
    this.eindjaar = eindJaar;
    this.startbedrag = startbedrag;
    this.rente = rente;
}

Rekening.prototype.eindbedrag = function () {
    let jaren = this.eindjaar-this.beginjaar;
    let renteInt = this.rente;
    let renteDec = (renteInt/100)+1;
    let bedrag = this.startbedrag;
    for (var i = 1; i<=jaren; i++){
       bedrag *= renteDec;
    }
    let eindbedrag = bedrag.toFixed(2);
    return eindbedrag;
}
//-----------------------TESTPROGRAMMA-----------------------------
'use strict';
var toetsenbord = require('readline-sync');

var rekening = new Rekening(2000, 2010, 4, 1000);
console.log("%d EUR belegd tegen %d%% in %d geeft in het jaar %d als eindbedrag %d",
rekening.startbedrag, rekening.rente, rekening.beginjaar, rekening.eindjaar, rekening.eindbedrag());


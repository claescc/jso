'use strict'
/* Schrijf een constructor functie om een Rekening met een saldo te maken.  Voorzie methodes stortGeld en haalGeldAf.  Als je meer geld probeert af te halen dan het saldo van de rekening, wijzigt de rekening niet.  Zorg ervoor dat volgend testscript de gevraagd output geeft:*/
// Create an eventEmitter object
let events = require('events');
let evEmit = new events.EventEmitter();


function Rekening(saldo=0) { // =0  deault parameter
    this.saldo = saldo;
}

Rekening.prototype.stortGeld = function (x) {
    this.saldo += x;
}

Rekening.prototype.haalGeldAf = function (y) {
    if (y > this.saldo) {
        evEmit.emit('saldo_negatief', this); // ipv this.saldo -- > krijg alles ipv alleen saldo
    } else {
        this.saldo -= y;
    }

}

Rekening.prototype.on = function(event, evHandeler){
evEmit.on(event, evHandeler)
}

// -----------------------------------------------------
var rekening = new Rekening(100);
rekening.on('saldo_negatief', function (src) {
    console.log("saldo rek 1 ontoereikend! (Saldo bedraagt ", src.saldo, ")"); 
});
// -----------------------------------------------------
// var rek2 = new Rekening(100);
// -----------------------------------------------------


console.log("saldo na creatie: ", rekening.saldo);
var bedrag = 20;
rekening.stortGeld(bedrag);
console.log("saldo na storting van ", bedrag, ": ", rekening.saldo);

bedrag = 10;
rekening.haalGeldAf(bedrag);
console.log("saldo na opname van ", bedrag, ": ", rekening.saldo);

bedrag = 150;
rekening.haalGeldAf(bedrag);
console.log("saldo na opname van ", bedrag, ": ", rekening.saldo);

// -----------------------------------------------------
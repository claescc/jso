//------------------------------------------------------------------
//                   BEGROTING
//------------------------------------------------------------------

/*obp06: Schrijf een klasse Begroting. Een begroting heeft 0 of meer inkomsten en 0 of meer uitgaven.Voorzie een methode om een inkomst toe te voegen en een methode om een uitgave toe te voegen. De methode presenteerBegroting moet een string teruggeven met een lijst van alle uitgaven, gevolgd door alle inkomsten. Wanneer de uitgaven groter zijn dan de inkomsten, moet er een extra inkomst worden getoond die de begroting in evenwicht brengt. Je zou volgend script kunnen gebruiken om dit te testen:


De output van deze main-methode is:
Uitgaven:
-5000
-6000
-7000
Inkomsten:
4000
3000
11000
De begroting is in evenwicht. */
//-----------------------TESTPROGRAMMA-----------------------------
'use strict';
var toetsenbord = require('readline-sync');

function Begroting() {
    this.inkomsten = [];
    this.uitgaven = [];
}


Begroting.prototype.voegInkomstToe = function (x) {
  this.inkomsten.push(x);
}

Begroting.prototype.voegUitgaveToe = function (y) {
   this.uitgaven.push(y);
}
Begroting.prototype.presenteerBegroting = function () {
    let som = 0;
    let aftrekking = 0;
    let evenwicht = 0                   // geen console.log meer gebruiken !!! 
    console.log("Uitgaven:")
    for(let i = 0; i < this.uitgaven.length; i++){
        console.log("-",this.uitgaven[i]);
        aftrekking += this.uitgaven[i];
    }
    console.log("Inkomsten:")
    for(let i = 0; i < this.inkomsten.length; i++){
        console.log(this.inkomsten[i]);
        som += this.inkomsten[i];
    }
    if (aftrekking>som){
        evenwicht = aftrekking - som;
        console.log("+",evenwicht);
    } 
   return "De begroting is in evenwicht.";
}
 
var begroting = new Begroting();
begroting.voegUitgaveToe(5000);
begroting.voegUitgaveToe(6000);
begroting.voegInkomstToe(4000);
begroting.voegUitgaveToe(7000);
begroting.voegInkomstToe(3000);
console.log(begroting.presenteerBegroting())

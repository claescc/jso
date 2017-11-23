//------------------------------------------------------------------
//                    CAR SPEED
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

//----------------------- klasse = Constructor -----------------------------
'use strict';
function Begroting(inkomsten, uitgaven) {
    this.inkomsten = inkomsten;
    this.uitgaven = uitgaven;
}


Begroting.prototype.voegInkomstToe = function (x) {
  let newIn = x+this.inkomsten;
   return this.inkomsten = newIn;
}

Begroting.prototype.voegUitgaveToe = function (y) {
    let newOut = this.uitgaven-y;
    return this.uitgaven = newOut;
}
Begroting.prototype.presenteerBegroting = function () {
return "Uitgaven : "+this.uitgaven+ " Inkomsten : "+ this.inkomsten;
}
   
//-----------------------TESTPROGRAMMA-----------------------------
'use strict';

var begroting = new Begroting();
begroting.inkomsten = 0;
begroting.uitgaven = 0;
begroting.voegUitgaveToe(5000);
begroting.voegUitgaveToe(6000);
begroting.voegInkomstToe(4000);
begroting.voegUitgaveToe(7000);
begroting.voegInkomstToe(3000);
console.log(begroting.presenteerBegroting())
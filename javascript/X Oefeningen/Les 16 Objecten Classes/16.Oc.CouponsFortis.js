//------------------------------------------------------------------
//                   FORTIS COUPON 
//------------------------------------------------------------------

/*obp07: de maximale waarde van de coupon die uitbetaald wordt aan de beleggers van Fortis wordt als volgt berekend:
- neem het gemiddelde van de eerste 4 koersen
- trek dat gemiddelde af van 10
- wat er overblijft is het maximumbedrag dat men kan terugkrijgen

Schrijf een klasse Fortis waar je een methode hebt om een koers toe te voegen (double). Deze methode zal een aantal maal (minstens 4) worden opgeroepen. Hou alleen de eerste 4 koersen bij die zijn toegevoegd. Voorzie een methode geefMaxCoupon die je de maximale waarde van de coupon teruggeeft volgens de methode die hierboven wordt beschreven.
Met de volgende koersen (alleen de eerste 4 tellen): 2,1.75, 1.85, 2.01 en 3 moet de maximum coupon 8.10 bedragen */
//-----------------------TESTPROGRAMMA-----------------------------
'use strict';
function Fortis() {
    this.koers = []
}

Fortis.prototype.double = function (x) {
  this.koers.push(x);
}

Fortis.prototype.geefMaxCoupon = function (){
    let maxbedrag = 0;
    let gemiddelde = 0;
    for (let i =0; i<=3;i++){
        gemiddelde += this.koers[i];
    }
    gemiddelde /= 4;
    maxbedrag = 10-gemiddelde;
    return "maxbedrag = "+maxbedrag.toFixed(2)+ " gemiddelde = "+gemiddelde.toFixed(2);
}

let fortis = new Fortis();
fortis.double(2);
fortis.double(1.75);
fortis.double(1.85);
fortis.double(2.01);
fortis.double(3);
console.log (fortis.koers);
console.log(fortis.geefMaxCoupon());
console.log("max coupon moet 8.10 bedragen.\n")

//---------------------------------------------------------------------------------
/* 
Obp08: pas de vorige oefening aan. In plaats van de eerste vier koersen bij te houden die zijn ingegeven, hou je de laatste 4 koersen bij om het gemiddelde te berekenen. Met de reeks koersen van de vorige oefening moet de maximum coupon 7.85 bedragen.
*/
Fortis.prototype.geefMaxCouponLaatste4 = function (){
    let maxbedrag = 0;
    let gemiddelde = 0;
    for (let i = this.koers.length-4; i<this.koers.length ;i++){
        gemiddelde += this.koers[i];
    }
    gemiddelde /= 4;
    maxbedrag = 10-gemiddelde;
    return "maxbedrag = "+maxbedrag.toFixed(2)+ " gemiddelde = "+gemiddelde.toFixed(2);
}

console.log (fortis.koers);
console.log(fortis.geefMaxCouponLaatste4());
console.log("max coupon moet 7.85 bedragen.")



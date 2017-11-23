//------------------------------------------------------------------
//                    CAR SPEED
//------------------------------------------------------------------

/*obp05: schrijf een klasse Auto met als eigenschappen snelheid (int), aantal uren (int) en aantal minuten (int). De eigenschap afstand (double) kan alleen worden opgevraagd. De bedoeling is dat je kunt opvragen welke afstand de auto heeft afgelegd. Je mag ervan uit gaan dat de gebruiker een juist aantal minuten ingeeft (0-59). Wanneer je vertrekt van het script in oefobp05_start zou je de volgende output moeten krijgen:
Na 02:30 u gereden te hebben tegen 60 km/uur heb je 150,00 km afgelegd */

//----------------------- klasse = Constructor -----------------------------
'use strict';
function Auto(snelheid, aantalUren, aantalMinuten) {
    this.snelheid = snelheid;
    this.aantalUren = aantalUren;
    this.aantalMinuten = aantalMinuten;
}

Auto.prototype.afstand = function () {
    let speed = this.snelheid;
    let uren = this.aantalUren
    let min = this.aantalMinuten;

    let kmUur = uren*speed;
    let kmMin = min/60*speed;
    kmUur += kmMin;
    return kmUur;
}
//-----------------------TESTPROGRAMMA-----------------------------
'use strict';

var auto = new Auto();
auto.snelheid = 60;
auto.aantalUren = 2;
auto.aantalMinuten = 5;
console.log("Na %d:%s u gereden te hebben tegen %d km/uur heb je %d km afgelegd",
    auto.aantalUren, auto.aantalMinuten < 10 ? "0"+auto.aantalMinuten : auto.aantalMinuten,  auto.snelheid, auto.afstand());

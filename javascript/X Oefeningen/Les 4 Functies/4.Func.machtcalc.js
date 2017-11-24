//------------------------------------------------------------------
//                   FUNCTIE BEREKEN MACHT
//------------------------------------------------------------------

macht = berekenMacht(getal1, getal2);
console.log("%d tot de %de macht is %d", getal1, getal2, macht);

function berekenMecht(grondtal, exponent) {    // lus maken voor exponent keer maal grodntal
    var resultaat = 1;                             // moet begin waarde 1 krijgen !! 1*0 is 1
    for (var i = 1; i <= exponent; i++) {  // FOR loop
        resultaat *= grondtal;
    }
}
return resulaat;

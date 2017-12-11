'use strict'

var kaartenboek = new Speelkaartenboek();

window.onload = init;

function init() {
    var btnKaart = frm.btnGeefKaart;
    var btnSchud = frm.btnSchud;
    btnKaart.onclick = flipkaart;
    btnSchud.onclick = schudkaarten;
}


function flipkaart() {
    var kaartI = kaartenboek.volgendeKaart();   // kaartI = speelkaarten[i]
    var img = document.getElementById("flipkaart")
    if (kaartenboek.isLeeg()) {
        document.getElementById("btnGeefKaart").disabled = true;
    }
    else {
        img.src = kaartI.afbeeldingPad;            // src = (Speelkaart.afbeelingPad)
    }
}

function schudkaarten() {
    document.getElementById("btnGeefKaart").disabled = false;
    kaartenboek.schud();
}













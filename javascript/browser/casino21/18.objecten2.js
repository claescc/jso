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
    var parent = document.getElementById("divimg"); 
    var newImg = document.createElement('img');

//_______________________________________________________________________
    var kaartI = kaartenboek.volgendeKaart();   // kaartI = speelkaarten[i]
  //  var img = document.getElementById("flipkaart")
    if (kaartenboek.isLeeg()) {
        document.getElementById("btnGeefKaart").disabled = true;
    }
    else {
    //    img.src = kaartI.afbeeldingPad;            // src = (Speelkaart.afbeelingPad)
        newImg.src = kaartI.afbeeldingPad;            // src = (Speelkaart.afbeelingPad)
        parent.appendChild(newImg);
    }
}

function schudkaarten() {
    var parent = document.getElementById("divimg"); 
    var images = document.getElementsByTagName('img');
    for( var i = images.length-1; i>=0;i--){
        parent.removeChild(images[i]);
    }
    var newImg = document.createElement('img');
    newImg.src ="images/cardback.png";        
    parent.appendChild(newImg);

    document.getElementById("btnGeefKaart").disabled = false;
    kaartenboek.schud();
}








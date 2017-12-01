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
    var kaartI = kaartenboek.volgendeKaart();  
    if (kaartenboek.isLeeg()) {
        document.getElementById("btnGeefKaart").disabled = true;
    }
    else {
        newImg.src = kaartI.afbeeldingPad;            
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


function Hand (){
    this.speelkaarten = speelkaarten;
}

Hand.prototype.voegKaartToe(){};
Hand.prototype.punten(){};
Hand.prototype.magStoppen(){};
Hand.prototype.isKapot(){};

/*
Schrijf een klasse Hand. Een hand kan meerdere speelkaarten bevatten.  Met methode voegKaartToe voeg je de doorgegeven kaart toe aan de kaarten van de hand.  Methode punten geeft terug hoeveel punten de hand waard is.  Dit bereken je door de som van de punten van de kaarten van de hand te berekenen, waarbij een kaart met waarde 1 voor 1 punt staat, een kaart met waarde 2 voor 2 punten staat, een kaart met waarde 3 voor 3 punten staat, enz.  Een boer is 11 punten waard, een dame 12 punten, en een heer 13 punten.  Methode magStoppen geeft true terug als de punten van de hand minstens 17 zijn.  Methode isKapot geeft true terug als de punten van de hand meer dan 21 zijn.  Methode factor geeft een getal terug afhankelijk van de punten van de hand: bij 21 punten is het resultaat 3, bij 20 punten is het resultaat 2, bij 19 punten is het resultaat 1, en bij alle andere punten is het resultaat 0.
Test de klasse uit met volgend script:
var kaartenboek = new Speelkaartenboek();
var hand = new Hand();
kaartenboek.schud();
do {
    var kaart = kaartenboek.volgendeKaart();
    console.log(kaart.omschrijving());
    hand.voegKaartToe(kaart);
    console.log("punten hand: %d", hand.punten());
} while (!hand.magStoppen());
if (hand.isKapot()) {
    console.log("Helaas, u bent uw inzet kwijt");
}
else {
    console.log("U krijgt uw inzet %d keer terug", hand.factor());
}
/*

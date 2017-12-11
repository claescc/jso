'use strict'

function Speelkaart(kleur, waarde, src) {
    this.kleur = kleur;
    this.waarde = waarde;
    this.afbeeldingPad = src;
}

Speelkaart.prototype.omschrijving = function () {
    return this.kleur + " " + this.waarde;
}


function Speelkaartenboek() {
    this.waarde = ["1", "2", "3", "4", "5"," 6", "7", "8", "9", "10", "boer", "dame", "heer"];
    this.kleur = ["harten", "klaveren", "schoppen", "ruiten"];
    this.index = 0;
    this.speelkaarten = [];
    this.maak52kaarten();
};

Speelkaartenboek.prototype.maak52kaarten = function () {
    var afkortingenKleuren = ['h','s','d','c'];
    let kleuren = this.kleur;
    let waarden = this.waarde;      //array terug !!
    let index = 0;
    for (let i = 0; i < kleuren.length; i++) {
        for (let x = 0; x < waarden.length; x++) {
            this.speelkaarten[index] = new Speelkaart( kleuren[i], waarden[x], "images/"+
                (x+1)+afkortingenKleuren[i]+".png"); // + afbeelding 
            index++;  
        }
    }
}

function getRandom() {return Math.floor(Math.random() * (52)) + 1;}

Speelkaartenboek.prototype.schud = function(){
    let shuffeled = this.speelkaarten; // array vol met objecten
    for(var i = 0; i < shuffeled.length; i++) {
        let random = getRandom();
        let kaart = shuffeled[i] ;
        shuffeled[i] = shuffeled[random];
        shuffeled[random] = kaart;
    }
    this.index = 0;
}

Speelkaartenboek.prototype.volgendeKaart = function(){
    return this.speelkaarten[this.index++];             // geeft speelkaart[i] terug 
}

Speelkaartenboek.prototype.isLeeg = function(){
   return this.index === this.speelkaarten.length ? true: false;
}   



//-------------------------------------------------------------------------
//---------------CONTROLE PROGRAMMA----------------------------------------

/*var kaartenboek = new Speelkaartenboek();
console.log("boek na creatie:");

for (var i = 0; i < kaartenboek.speelkaarten.length; i++) {
    console.log(kaartenboek.speelkaarten[i].omschrijving());
}
if (kaartenboek.isLeeg()){
    console.log("*** alle kaarten zijn opgevraagd ***");  
}
else{
    console.log("*** er zijn nog niet opgevraagde kaarten ***"); // YEP
}
console.log("kaarten een voor een vragen na creatie:");
kaartenboek.schud();  //start terug met volledig boek en schud de kaarten
if (kaartenboek.isLeeg()){
    console.log("*** alle kaarten zijn opgevraagd ***");  
}
else{
    console.log("*** na schudden starten we terug met een volledig boek ***"); // YEP
}
console.log("kaarten een voor een vragen na schudden:");
for (var i = 0; i < kaartenboek.speelkaarten.length; i++) {
    console.log(kaartenboek.volgendeKaart().omschrijving());
}
*/
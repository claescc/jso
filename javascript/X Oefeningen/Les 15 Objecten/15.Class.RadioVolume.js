//------------------------------------------------------------------
//                     Radio Volume
//------------------------------------------------------------------

/*Obp01: Maak een klasse “Radio”. Een “Radio” heeft een volume (integer). Je kunt de tekst van het liedje dat speelt opvragen. Wanneer het volume negatief is, staat de radio stil en moet de tekst “lalala” zijn. Wanneer het volume positief of 0 is, staat de radio luid en moet de tekst “LALALA” zijn. Vertrek van het script obp01_start.js. Dit script bevat code die je als test kan gebruiken voor de klasse.

*/

//------------------------------------------------------------------
'use strict';





//----------------------- klasse = Constructor -----------------------------
function Radio(volume, lyrics){
    this.volume = volume;

}

Radio.prototype.getMuziek = function (){
    let noMusic = "";
    if (this.volume<0){
        return noMusic = "lalala"
    } else {
        return noMusic = "LALALA"
    }
}


//-----------------------TESTPROGRAMMA-----------------------------
var toetsenbord = require('readline-sync');

var radio = new Radio();
radio.volume = 1;
var tekstLuid = radio.getMuziek();
console.log("Bij luid volume klinkt de radio als %s", tekstLuid);
radio.volume = -1;
console.log("Bij stil volume klinkt de radio als %s", radio.getMuziek());
var volume = parseInt(toetsenbord.question("Geef volume: "));
radio.volume = volume;
console.log("Bij dit volume klinkt de radio als %s", radio.getMuziek());





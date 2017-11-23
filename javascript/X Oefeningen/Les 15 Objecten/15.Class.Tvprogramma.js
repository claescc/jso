//------------------------------------------------------------------
//                     Tv programmas
//------------------------------------------------------------------

/*Obp02: Maak een klasse “TV”. Een TV heeft een post (integer). Je kunt het TV-programma opvragen. De volgende programma’s moeten worden ingesteld:
Post 0: K3 en de regenboogprinses
Post 1: België-Spanje
Post 2: Parijs-Tours
Post 3: Lotto uitslag
Alle andere posten: Ooit “FC De Kampioenen” gemist?
Vertrek van het script oefobp02_start.js. Het zou kunnen dat er nog een fout in staat...
*/

//----------------------- klasse = Constructor -----------------------------
'use strict';
function TV(post){
    this.post = post;
}

TV.prototype.getProgramma = function (){
    switch (this.post) {
        case 0: return "K3 en de regenboogprinses";
        case 1: return "België-Spanje"; 
        case 2: return  "Parijs-Tours"; 
        case 3: return  "Lotto uitslag"; 
        default: return  "Ooit “FC De Kampioenen” gemist?";
    }
}

//-----------------------TESTPROGRAMMA-----------------------------
var toetsenbord = require('readline-sync');

var tv = new TV();
tv.post = 2;
var programma = tv.getProgramma();
console.log("Op post %d spelen ze '%s'", tv.post, programma);
var post = parseInt(toetsenbord.question("Geef post: "));
tv.post = post;
programma = tv.getProgramma();
console.log("Op post %d spelen ze '%s'", tv.post, programma);





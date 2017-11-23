//------------------------------------------------------------------
//                     Tv programmas
//------------------------------------------------------------------

/*Obp03: Maak een klasse “TV2”. Deze klasse heeft twee eigenschappen: een post en een uur, allebei integers. De bedoeling is dat je via de methode getProgramma() kunt opvragen welk TV-programma op die post en dat uur gespeeld wordt. Er zijn twee posten: 0 en 1. Het programmaboekje ziet er als volgt uit:
Op post0: 
	Voor 18 uur: Tik Tak, Tussen 18 en 19 uur: Samson en Gert, Na 19 uur: K3 in het Sportpaleis
Op post1:
	Voor 19 uur: sport, Tussen 19 en 20 uur: voetbal, Na 20 uur: sport
Schrijf ook een testscript waarmee je de klasse kunt testen.
*/

//----------------------- klasse = Constructor -----------------------------
'use strict';
function TV2(post, uur) {
    this.post = post;
    this.uur = uur;
}

TV2.prototype.getProgramma = function () {
    if (this.post == 0) {
        switch (true) {
            case this.uur < 18: return "Tik Tak";
            case this.uur <= 19: return "Samson en Gert";
            case this.uur > 19: return "K3 in het Sportpaleis";
        }
    } else if (this.post == 1) {
        {
            switch (true) {
                case this.uur < 19: return "Sport";
                case this.uur <= 20: return "Voetbal";
                case this.uur > 20: return "Sport";
            }
        }
    }
}

//-----------------------TESTPROGRAMMA-----------------------------
var toetsenbord = require('readline-sync');

var tv2 = new TV2();
var post = parseInt(toetsenbord.question("Geef post: "));
var uur = parseInt(toetsenbord.question("Geef uur: "));
tv2.post = post;
tv2.uur = uur;

var programma = tv2.getProgramma();
console.log("Op post %d spelen ze '%s'", tv2.post, programma);

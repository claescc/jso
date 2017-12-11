//------------------------------------------------------------------
//                     showHOND
//------------------------------------------------------------------

/*Oefening
Oefening
Breid oefening OO01 (Hond) uit. Maak een klasse ShowHond.  Alle showhonden zijn honden die een aantalPrijzen (geheel getal) hebben gewonnen, en die kunnen paraderen.  (functie paradeer(wijze)).  Als ze een show winnen (methode winShow) verhoogt het aantalPrijzen dat ze gewonnen hebben.
*/

//------------------------------------------------------------------
'use strict';

console.log('   PROGRAMMA: ShowHonden       ')
var toetsenbord = require('readline-sync');

function Hond(name, race, weight) {
    this.name = name;
    this.race = race;
    this.weight = weight;
}

Hond.prototype.blaf = function () {
    let blaf = "";
    if (this.weight > 30) {
        blaf = "WOEF WOEF";
    } else if (this.weight <= 10) {
        blaf = "kefkefkefkefkef";
    } else {
        blaf = "Waf";
    }
    return blaf;
};

var fido = new Hond("Fido", "beagle", 38);
var fluffy = new Hond("Fluffy", "poedel", 30);
var flavie = new Hond("Flavie", "chihuahua", 10);
//fido.blaffenFunctie();
//fluffy.blaffenFunctie();
//flavie.blaffenFunctie();


var honden = [fido, fluffy, flavie];
for (var i = 0; i < honden.length; i++) {
    var size = "kleine";
    if (honden[i].gewicht > 10) {
        size = "grote";
    }
    console.log(honden[i].name + " is een " + size + " " + honden[i].race);
    console.log(honden[i].blaf());
}

//-----------------------UITBREIDING-----------------------------


function ShowHond(name, race, weigth, prijzen) {    // constructor overrloading Overwriting
    Hond.apply(this, arguments); // all properties Object
    // Hond.call(this, name, race, weigth);
    this.aantalPrijzen = prijzen;
}
// copy all constructor functions / methods of the HOND-Object
ShowHond.prototype = new Hond(); // voor properties en Method over te erven (blaf inc)

ShowHond.prototype.paradeer = function (wijze) {
    console.log(this.name + " is aan het ", wijze);
}

ShowHond.prototype.winShow = function () {
    this.aantalPrijzen++;
}

//-------------------------------------------------------------
var scotty = new ShowHond("Scotty", "Schotse terrier", 15, 0);
var beatrice = new ShowHond("Beatrice", "dwergkeeshond", 5, 3);
// showhonden kunnen alles wat gewone honden kunnen:
console.log(scotty.blaf());
// showhonden kunnen meer dan gewone honden:
scotty.paradeer("trappelen");
beatrice.paradeer("trippelen");

console.log(scotty.name, " heeft al ", scotty.aantalPrijzen, " show(s) gewonnen.");
console.log(beatrice.name, " heeft al ", beatrice.aantalPrijzen, " show(s) gewonnen.");

scotty.winShow();
console.log("Nu heeft ", scotty.name, " ", scotty.aantalPrijzen, " show(s) gewonnen.");
console.log("Nu heeft ", beatrice.name, " ", beatrice.aantalPrijzen, " show(s) gewonnen.");

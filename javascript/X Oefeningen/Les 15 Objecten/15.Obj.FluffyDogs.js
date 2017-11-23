//------------------------------------------------------------------
//                     FLUFFY HOND
//------------------------------------------------------------------

/*Oefening
Maak een klasse Hond.  Elke hond heeft een naam, een ras en een gewicht en functie blaf.  Als een hond van meer dan 30kg blaft, wordt de melding “WOEF WOEF” getoond. Als een hond van minder dan 10kg blaft, wordt de melding “kefkefkefkefkef”  getoond. Als een andere hond blaft, wordt de melding “waf” getoond.
Zorg dat de klasse werkt met dit testprogramma:

*/

//------------------------------------------------------------------
'use strict';

console.log('   PROGRAMMA: Fluffy        ')
var toetsenbord = require('readline-sync');

function myClassDogOject(name, race, weight) {
    this.name = name;
    this.race = race;
    this.weight = weight;
}

myClassDogOject.prototype.blaffenFunctie = function () {
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

var fido = new myClassDogOject("Fido", "beagle", 38);
var fluffy = new myClassDogOject("Fluffy", "poedel", 30);
var flavie = new myClassDogOject("Flavie", "chihuahua", 10);
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
    console.log(honden[i].blaffenFunctie());
}




//-----------------------Functies-----------------------------
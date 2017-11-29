'use strict';
// CONSTRUCTOR 
// functie om 0-1-meer objecten te maken. 

function CreateNewCarObjects(merk, model) {
    this.merk = merk;
    this.model = model;
    this.cabrio = false;
    this.bouwjaar = new Date().getFullYear();
    this.gestart = false;

    /* METHODE NIET IN CONSTRUCTOR ZETTEN DAT IS VOOR ELK OBJECT OVERKILL 
  
          Fuction {}
          function{}
                                                     */

}
// METHODE VOOR ALLES AUTOS BUITEN DE CONSTRUCTOR ZETTEN !!!!
CreateNewCarObjects.prototype.starten = function () {
    this.gestart = true;
    console.log("De motor is gestart");
};

CreateNewCarObjects.prototype.rijden = function (noise) {
    if (this.gestart) {
        let temptemp = this.gegevens4();
        console.log("ik vertrek met mijn %s)", temptemp);
        console.log(noise);
    } else {
        console.log("start de motor eerst!");
    }
};

CreateNewCarObjects.prototype.gegevens4 = function () {
    let cabrioMelding = this.cabrio ? "cabrio" : " ";
    return "De gegevens: " + this.merk + " " + this.model + " " + this.cabrio + " " + this.bouwjaar;
};

// object maken met costructor
let auto1 = new CreateNewCarObjects("BMW", "X6")     // NEW geheugen blok !!!! ze moeten iets onthouden !!
console.log(auto1);
auto1.rijden("broembroem");
auto1.starten();
auto1.rijden("broooeembroooeem");
auto1.rijden(auto1.gegevens4());

let auto2 = new CreateNewCarObjects("MERCEDES", "CLA");
auto2.cabrio = true;
auto2.starten();
auto2.rijden("tuuuttuuutt");
auto2.kleur = "safierzwart";
auto2.rijden(auto2.gegevens4());

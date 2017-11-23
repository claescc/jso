'use strict'

let myTuuutTuut;    // OBJECTEN

myTuuutTuut = { // add properties 1st  -- Functions 2ed
    brand: "Spyker",                        // String, integer, real, array
    model: "SUV",                           // scheiden met een komma , , , , , , ,
    extras: ["leather", "airo"],
    buildyear: 2010,                        // mijn auto heet een buildyear 
    cabrio: true,                    
    
    rijden: function(){  // functies erna in de lijst zetten
         // javascript zoekt 1st local var -> parameter -> global var
         // javascript zoekt niet naar PROPERTIES vindt geen var gestart
        if (this.gestart){       // THIS.  this.gestart  anders ERROR
            console.log("vrooom");
        }else{
            console.log("start de motor eerst!");
        }                   
    },
    starten: function(){                     
        this.gestart =true;
        console.log("De motor is gestart");
    },

    gegevens4: function(){
        let cabrioMelding = this.cabrio ? "cabrio" : " ";
        return "De gegevens: "+this.brand+ " "+this.model+ " "+this.extras+ " "+this.buildyear;   
    },

}; // mag weg ; als het alleen op een lijn staat 

let buildYearMyTuut = myTuuutTuut.buildyear;
console.log(buildYearMyTuut);

// aanpassen wat er in Object staat 
myTuuutTuut.cabrio = false;     // geen cabrio
console.log(myTuuutTuut.cabrio);

// jaar jonger of ouder -- ++ 2010
myTuuutTuut.buildyear--; 
console.log(myTuuutTuut.buildyear); // 2009
myTuuutTuut.buildyear++;
myTuuutTuut.buildyear++;
console.log(myTuuutTuut.buildyear); // 2011

console.log(myTuuutTuut.colorsWhooohoooo); // UNDEFINED  (color bestaat nog niet)
// add a property 
myTuuutTuut.colorsWhooohoooo = "orange";   // create a random new property
console.log(myTuuutTuut.colorsWhooohoooo); // heeft.. mijn auto heeft een kleur

// functie in object oproepen
myTuuutTuut.rijden(); 
myTuuutTuut.starten(); 
myTuuutTuut.rijden(); 


let getTheFirst4PropertiesoutObject = myTuuutTuut.gegevens4();
console.log(getTheFirst4PropertiesoutObject);
'use strict';

var datum = new Date();        
var uur = datum.getHours();    
switch (uur) {                  // Switch ( expressie){
    case 9:                     // case exp 1 :         // case exp 2:   // default:  }
        console.log("Tussen 9 en 10 kan je eens naar koffie zien");
        break;                  // wordt uitgevoerd als het == is !!
    case 12:
        console.log("Tussen 12 en 1 eet iedereen");
        break;          // STOP GA VERDER NAA VOLGENDE SWITCH
    case 18:
        console.log("Tussen 6 en 7 begint een werkmens te leven");
        break;      // BREAK MOET ER STAAN !!
    default:
        console.log("Werk maar rustig verder");
}              // wordt uitgevoerd als bovenstaande exp niet kloppen == in alle andere gevallen

// PAS OP

case 9:                 // als CASE = is aan 9  en 10 en 11 = voormiddag dan BREAK !
case 10:
case 11:                    
console.log("Tussen 9 en 10 kan je eens naar koffie zien");
break;                  
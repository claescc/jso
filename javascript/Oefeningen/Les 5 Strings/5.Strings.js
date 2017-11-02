'use strict'

// een(string)literal staat tussen '' of "" 
var x = "panda";


// strings zijn: 'immutable'                string blijft nog steeds panda bevatten in kleine letters
x.toUpperCase();    // is 'PANDA'       FUNCTIE DOESNT CHANGE STRING!!!!
console.log(x);   // blijft 'panda'

x = x.toUpperCase(x);  
console.log(x);          // 'PANDA'

console.log("The word %s has %s characters", x, x.length); // lengt = 5 letters lang

// literals verspreiden over meerdere lijnen 
// 1) concateneren met +operatoren
var langeString = "Dit is heel lang " +        // "" moeten op zelfde lijn sluiten!!
"lang lang verhaal" +                          // + doen om samen te houden 
"en nog langer dan je denkt";     
console.log(langeString);

// 2) backslach op einde van de lijn
// geeft aan dat stringliteral verder gaat 
// op volgende lijn
langeString = " jan is een kind van \
Joris en Korneel want";                     
console.log(langeString);

// escape characters
x ="zin1\nzin2";
console.log(x);         // New line !

x = "y:\temp"
console.log(x); //  c:      emp 	        \t is TAB toets

x = "y:\\temp"
console.log(x); //  c:\temp 	            \\ dubbel om backslash te tonen

x = "Zij zei:\"hallo!\"";       //       \"hallo!\"
console.log(x);                 // Zij zei:"Hallo!"     --> Hoe krijgen we "" mee in de string?

x = "Zij zei:'hallo!'";                  //       'hallo!'
console.log(x);                          // Zij zei:'Hallo!' 

// NIEUW OBJECT

// nieuw string maken met new string zijn string-OBJECTEN en geen LITERALS!!
// Geen primitieve waarden

var stringObj = new String(x);
console.log(stringObj);         // [String: 'Zij zie:"hallo!"']


//************************************************************* */
//  STRINGS VERGELIJKEN
//************************************************************* */

if (x == stringObj){                       // vergelijk de inhoud van strings
    console.log("x == stringObj");         // TRUE Als string zelfde inhoud heeft wel hetzelfde!
}

if (x === stringObj){                       // vergelijk de inhoud zelfde type en inhoud
    console.log("x === stringObj");         // False primitive type x !== string object stringObj
}

var w1 = "banaan", w2 = "Appel";
if (w1 < w2){
    console.log("%s komt alfabetisch voor %s",w1,w1);       //  a = 1       b =2  
}else {
    console.log("%s komt alfabetisch voor %s",w2,w1);
}

// OF MET FUNCTIE
var result = w1.localeCompare(w2);  // pas op MAC locale andere sorting !!! anders < > gebruiken
 if (result < 0) {
    console.log("%s komt alfabetisch voor %s",w1,w2);       
}else if (result == 0){
    console.log("%s komt alfabetisch voor %s",w1,w2);       // appel == appel
}else { // result > 0
    console.log("%s komt alfabetisch voor %s",w2,w1);
}

 
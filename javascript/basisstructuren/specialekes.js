'use strict';

var smurf;  // = undefined

console.log(1+1);  // 2             getal + getal = uitkomst 

console.log("1"+1); // 11           string + getal = string-getal

console.log(2*"10");  // 20         getal * string  pc maakt van string getal want vindt 10 = 20

console.log(2*"smurf");  // NaN     getal * unknown NIET MOGELIJK NO NUMBER (Not a Nr)

console.log(5/0);   // Infinity     getal / 0 = delen door infinity = infinity

// !! geen waarde aan var geven geeft javscript er de waarde undefined aan !! 
console.log(smurf);   // undefined    smurf = undefined ( nooit een waarde gekregen)

// we mogen (sleutelwoord) null toekennen aan een var
// om aan te geven dat die var momenteel geen bruikbare waarde bevat
smurf = null;
console.log(smurf); // null             niets = ik heb bewust nog geen waarde gegeven
                                   //   undefined = ik ben het vergeten !!!
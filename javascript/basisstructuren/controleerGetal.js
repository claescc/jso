'use strict';

var toetsenbord = require('readline-sync');
var getal = toetsenbord.question('Tik een getal in: '); // user geeft iets anders in bv !PAS OP !

// gebruik functie isNaN om te controleren of een waarde geconverteerd kan worden naar een numerieke waarde
if (isNaN(getal) == true) {   //  is het GEEN getal javascript kan er geen getal van maken..

// korter:
if (isNaN(getal)) { // is is true mag je weglaten !! korte notatie 
    console.log("%s is geen getal", getal);
}
else { // het is wel een getal !
    console.log("U hebt getal %d ingetikt.", parseFloat(getal));
}

// waarde NaN (Not a Number) stelt iets voor dat niet voorgesteld kan worden in de verzameling van de reële getallen incl oneindig ("R streep") 
// (bv imaginair getal, 0/0, iets dat geen getal is)

console.log("5/0 = %s", 5 / 0);       // dus  5  / infinity = infinity
console.log("0/0 = %d", 0 / 0);         // nan kan niet mag niet 
console.log("isNaN(5/0) = %s", isNaN(5 / 0));       // FALSE : dus  5  / infinity = infinity
console.log("isNaN(0/0) = %s", isNaN(0 / 0));       // TUE : 
console.log("isNaN(false) = %s", isNaN(false));     // FALSE : is geen getal

if (NaN != NaN) { // nan is niet gelijk aan nan = unknow is not equal to unknown
    console.log("Weetje: NaN != NaN");
}
else {
    console.log("Weetje: NaN == NaN");
}

/*  uitvoer:
...
5/0 = Infinity
0/0 = NaN     
isNaN(5/0) = false                                                                                                                         
isNaN(0/0) = true                                                                                                                      
isNaN(false) = false                                                                                                                   
Weetje: NaN != NaN 
*/
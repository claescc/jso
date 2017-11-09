'use strict';

function f1(x){
    // bij oproep van een fie wordt voor elke param
    // een nieuwe var gemaakt binnen de fie.
    // op het einde van de fie verdwijnt deze "parametervariabele"
    console.log("x in fie voor wijziging:",x);
    x++;
   console.log("x in fie na wijziging:",x);
}

//(actueel) arg met andere naam dan (formele) param     // 1.1.2.   na oproep 1
var w = 1; //GLOBAAL
console.log("w voor oproep:",w);
f1(w);
console.log("w na oproep:",w); // na oproep 1


//(actueel) arg met zelfde naam als (formele) param     // 1.1.2.   na oproep 1
var x = 1; // GLOBAAL
console.log("x voor oproep:",x);
f1(x);
console.log("x na oproep:",x); // na oproep 1


// param met zelfde naam als lokale var
// => lokale var wordt gebruikt in fie
function f2(x){                                     //  x wordt 5
    x = 12;     // wordt 12 OVERWRITTEN!!!
    // "paramvariabele" x wordt overschreven met lokale var x
    console.log("x in fie2 voor wijziging:",x);     //12
    x++;
   console.log("x in fie2 na wijziging:",x);         //13
}
f2(5);      //oproep geeft 13. 

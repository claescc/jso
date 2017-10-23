'use strict';

var x,y,z;

x = 10;
y = 3;

console.log(x/y);  // 3.3333333333333335 cijfer delen door cijfer
console.log(x+y);  // 13                cijfer plus cijfer

y = "3";
console.log(x/y);  // 3.3333333333333335    cijfer delen door stringcijfer 
console.log(x+y);  // 103      PLUS +       cijfer plus schrijf stringsijfer erachter 
 
 // string converteren naar integer (1)
z = parseInt(y);  // z = 3                 string ingeven en maakt daar een geheelgetal van.  text "3" wordt getal 3
console.log(x+z);   // 13                   cijfer plus cijfer 

y = "1";
console.log(x+y);   // 101                  10 getal en 1 is string. 
// string converteren naar integer (2)
z = +y;             // z = 1                Z wordt een getal voor getal + getal te doen !! 
console.log(x+z);   // 11                   10 getal + 1 getal = 11 

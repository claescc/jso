'use strict';

var x = 1, y = 2, z = 3;
var som;
var resultaat1, resultaat2;

som = x + y;
console.log(som); // 3
som = som + x;
console.log(som); // 4
som += x;
console.log(som); // 5
som++;              // positie van ++ is belangrijk !!
console.log(som); // 6
//  ++ : increment 
console.log(som++); //6 // POSTFIX  
//som is 6 en pas daarna gaat waarde verhoogd worden. dus 7

console.log(som); // 7
console.log(++som);// 8 // PREFIX
console.log(som); // 8

// Delen / en product * voorang op plus  + en min - 
resultaat1 = x + y * z; 
console.log("zonder haakjes : " + resultaat1); // 7 

// RONDE HAAKJES hebben voorrang op wiskundige regels !
resultaat2 = (x + y) * z;
console.log("met haakjes : " + resultaat2);  // 9 
'use strict';

console.log('vergelijken met ==');
console.log('foo'=='foo');     // true          string gelijk aan string
console.log('foo'=='bar');     // false         string is niet gelijk aan string
console.log(null==null);       // true          nul is gelijk aan nul
console.log("2"==2);            // true   !!!   string pc detect 2 is gelijk aan cijfer 2

// Special Cases
console.log(0==-0);            // true   !!!            nul is min nul
console.log(-0==-0);           // true                  min nul is min nul 
console.log(NaN==0/0);         // false   !!!           nan (unknown) is niet gelijk aan nul / nul 

console.log('vergelijken met ===');   SAME TYPE AND VALUE
console.log('foo'==='foo');     // true                 A is A 
console.log('foo'==='bar');     // false                A is niet B
console.log(null===null);       // true                 null is null
console.log("2"===2);            // false !!!           string 2 is niet cijfer 2 niet zelfde var

// Special Cases
console.log(0===-0);            // true    !!!          0 is -0             NIET -2 === 2 !!
console.log(-0===-0);           // true                 -0 is -0
console.log(NaN===0/0);         // false   !!!          unknown is niet 0/0
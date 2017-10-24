'use strict';
 
console.log('Oefening SWITCH CASE ');


var toetsenbord = require('readline-sync'); 
var ingaveA = toetsenbord.question('Geef eerste getal in:  '); 
var ingaveB = toetsenbord.question('Geef tweede getal in:  '); 
var operator = toetsenbord.question('Geef operator in:  '); 

var getalA, getalB;

getalA = parseInt(ingaveA);
getalB = parseInt(ingaveB);

switch (operator) {                 
    case '+' :                     
        console.log("Oplossing: ", getalA + getalB);
        break;            
    case '-' :
        console.log("Oplossing: ", getalA - getalB);
        break;          
    case '*':
        console.log("Oplossing: ", getalA * getalB);
        break;   
     case '/':
        console.log("Oplossing: ", getalA / getalB);
        break  
    default:
        console.log("Foutieve operator moest * / - + zijn ");
} 
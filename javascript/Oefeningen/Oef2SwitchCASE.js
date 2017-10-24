'use strict';

console.log('Oefening SWITCH GRAAD');


var toetsenbord = require('readline-sync'); 
var ingaveA =  parseInt(toetsenbord.question("Geef eerste getal: "), 10);



switch (true) {                 
   case (ingaveA = 0 && ingaveA <=9 ) :               
       console.log("ovoldoende");
       break;            
   case (ingaveA = 10 && ingaveA <=13 ) : 
       console.log("voldoende");
       break;          
   case (ingaveA = 14 && ingaveA <=15 ) : 
       console.log("onderscheiding");
       break;   
    case (ingaveA = 16 && ingaveA <=17 ) : 
       console.log("grote onderscheiding");
       break  
   case (ingaveA = 18 && ingaveA <=20 ) : 
       console.log("grootste onderscheiding ");
    default: 
         console.log("ongeldige Score ");
        break;
} 
/*
 
console.log('Oefening SWITCH CASE + - * / ');


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
*/
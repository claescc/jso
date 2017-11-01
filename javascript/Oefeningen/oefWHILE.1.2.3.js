/* _________________________________________________________________
GEMIDDELDE 
_________________________________________________________________ */
'use strict';

console.log('Oefening WHILE 1');

var toetsenbord = require('readline-sync'); 
var ingaveA =  parseInt(toetsenbord.question("Geef eerste getal: "));
var som = 0;        // var som =0 ,aantal = 0;
var aantal =0 ;

while (ingaveA >= 0) {
    som = som + ingaveA;   // som += ingaveA;
    aantal= aantal+1       // aantal++;
    ingaveA = parseInt(toetsenbord.question("Geef volgende getal "));
}
console.log("Stop : Gemiddelde is= ", (som/aantal) ); 







/* _________________________________________________________________

GROOTST GEMENE DELER
_________________________________________________________________ */
'use strict';

console.log('Oefening WHILE 2 ');

var toetsenbord = require('readline-sync'); 
var ingaveA =  parseInt(toetsenbord.question("Geef eerste getal: "));
var ingaveB =  parseInt(toetsenbord.question("Geef tweede getal: "));
var grootste, kleinste, verschil;

// var result = "De grootste gemene deler van " + a + " en " + b + " is "; (geen comma get .log)

while (ingaveA < 0) {
    ingaveA = parseInt(toetsenbord.question("Geef opnieuw getal A in "));
}
while (ingaveB < 0) {
    ingaveA = parseInt(toetsenbord.question("Geef opnieuw getal B in "));
}

while (ingaveA != ingaveB)  // je moet uit lus kunnen geraken door a niet gelijk aan elkaar te krijgen 
{
    if (ingaveA>ingaveB)
    {
        ingaveA -= ingaveB;             // ingaveA = (ingaveA - ingaveB)
    
       
    }
    else if (ingaveB> ingaveA)
    {
        ingaveB -= ingaveA;
    }
    //verschil = grootste-kleinste;
}
console.log("Stop : GGD= ", ingaveA );  






/*_________________________________________________________________
 ONGEVALSTATESTIEKEN
 _________________________________________________________________*/
 'use strict';
 
 console.log('Oefening WHILE 3 ');
 
 var toetsenbord = require('readline-sync'); 
 var sex =  toetsenbord.question("geslacht in v of m: ");
 var age =  parseInt(toetsenbord.question("Geef leeftijd in: "));
 var vrouwen, mannen;

 while ((sex = 'm')&& (sex = 'v') 
 // while ((geslacht == "m") || (geslacht == "v")) {
{ 
    switch (true)
    {                 
    case 'v' :   
        sex =  toetsenbord.question("Geef volgend geslacht in v of m: ");
        console.log('Geef volgende bestuurder in:')                  
        console.log("vrouw");
        vrouwen = +1
        break;            
    case 'm':                          
        console.log("man");
        mannen = +1
        break;         
    } 
} // letter is geen man of vrouw dus stop
console.log('        |   Mannen  |    Vrouwen |');
console.log(' <25    |    %s     |      %s    |', mannenJong, vrouwenJong);
console.log('  25<   |    %s     |      %s    |', mannenOud, vrouwenOud);




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



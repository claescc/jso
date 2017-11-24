/*_________________________________________________________________
                        VRAAG 5 GETALLEN
 _________________________________________________________________*/

'use strict';

var toetsenbord = require('readline-sync');
var aantalGetallen = parseInt(toetsenbord.question("Aantal getallen: "));
//var getalA = parseInt(toetsenbord.question("Geef getal ")); 
var som = 0;


for (var teller = 1; teller <= aantalGetallen; teller++) {
    var getalB = parseInt(toetsenbord.question("Geef volgend getal in "));
    som = som + getalB;
    //getalA = 0; 
}
console.log("De som van de 5 getallen is = %s", som);







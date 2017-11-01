
//------------------------------------------------------------------
//                   FUNCTIE FRANK NAAR EURO 
//------------------------------------------------------------------

'use strict';

var toetsenbord = require('readline-sync');
var resultaat;

var x = toetsenbord.question("Geef eerste getal: ");


resultaat = BEFNaarEuro(x);
console.log("Belgische frank is = Euro %s", resultaat);



function BEFNaarEuro(BEF) {             
    var result = 1;                         // maak variabel van WISSELKOERS
      result = BEF/40.3399                                        
    return result;             
}

/*

//------------------------------------------------------------------
//                   FUNCTIE EURO NAAR FRANK
//------------------------------------------------------------------

'use strict';

var toetsenbord = require('readline-sync');
var resultaat;

var x = toetsenbord.question("Geef prijs van brood in euro : ");
var y = toetsenbord.question("Geef prijs van melk in euro : ");

resultaat = (  (EuroNaarBEF(x))    +   (EuroNaarBEF(y))    );
console.log("euro zou = Belgische Frank %s", resultaat);

function EuroNaarBEF(EURO) {             
    var result = 1;           
      result = EURO*40.3399                                        
    return result;             
}
*/
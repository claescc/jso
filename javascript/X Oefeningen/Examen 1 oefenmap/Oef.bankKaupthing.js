//------------------------------------------------------------------
//                   BANK KAUPTHING
//------------------------------------------------------------------

'use strict';

var toetsenbord = require('readline-sync');
var naamBank = toetsenbord.question("Naam bank: ");
var kapitaal = parseInt(toetsenbord.question("Bedrag: "));
//var rente = parseInt(toetsenbord.question("Rentevoet: "));
// var newkap = renteFunc(kapitaal, rente)

if (naamBank.toUpperCase()== "KAUPTHING") 
    {
    // console.log("U kunt voorlopig uw geld niet opvragen.");
    if (kapitaal>20000) { console.log ("Max bedrag dat je kan terugkrijgen is 20000 euro."); }
    else { console.log("U krijgt %s.", kapitaal); }
    }
else 
{ 

//var newkap = renteFunc(kapitaal)
// RENTE // console.log("Bij %s bedraagt het rentebedrag %s EUR. Het totaalbedrag is %s EUR.",naamBank, rente,newkap);
// console.log("Bij %s bedraagt het rentebedrag 0.4 EUR. Het totaalbedrag is %s EUR.",naamBank,newkap);
console.log("U krijgt %s.", kapitaal)
}

//------------------------------------------------------------------
//                   BANK KAUPTHING
//------------------------------------------------------------------

/* Als RENTE OOK VARIABLE IS :
function renteFunc(x, y) {             
    var result = 1;           
      var rente = x*(y/100+1)
      result = rente;                                      
    return result;             
}
*/
// RENTE VAST :
/*
function renteFunc(x) {             
    var result = 1;           
      var rente = x*1.04
      result = rente;                                      
    return result;             
}
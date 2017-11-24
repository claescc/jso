//___________________________________________________________________________________________________
/*
                            JavaScript: herhalingsoefeningen 1 & 2 functies

Fies01 (gemakkelijk)
Schrijf een functie oppCirkel die de oppervlakte van een cirkel met gegeven straal r teruggeeft volgens de formule π * r2.  
Je kunt de waarde van π opvragen met Math.PI

Schrijf een functie omtrekCirkel die de omtrek van een cirkel met gegeven straal r teruggeeft volgens de formule 2*π * r.  
Test deze functies door aan de gebruiker een straal te vragen en de oppervlakte en de omtrek van een cirkel met die straal te tonen.*/
//___________________________________________________________________________________________________

/* 
function oppCircle(straalR) {
    var pie = Math.PI;
    var oppC = pie * straalR;
    return oppC;
}

function omtrekCircle(straalR) {
    var pie = Math.PI;
    var omtrekC = 2*pie * straalR;
    return omtrekC;
}
//---------------------
'use strict';
console.log('Functie: oppervlakte circkel');
var toetsenbord = require('readline-sync');

var straal = parseInt(toetsenbord.question("Geef straal in cm:  "));
var opp = oppCircle(straal);
opp = opp.toFixed(2);

var omtrek = omtrekCircle(straal);
omtrek = omtrek.toFixed(2);

console.log("De opp van uw cirkel is %s cm2",opp);
console.log("De omtrek van uw cirkel is %s cm2",omtrek);

*/
//___________________________________________________________________________________________________
/*Fies02 (gemakkelijk)
Schrijf een functie die de grootte van de schuine zijde c van een rechthoekige driehoek met gegeven rechthoekszijden a en b volgens de stelling van Pythagoras teruggeeft volgens de formule c = Math.sqrt( a2 + b2) 
Test deze functies door aan de gebruiker de waarden voor a en b te vragen en de waarde voor c te tonen.  (ter controle: voor a = 3 en b = 4 moet c = 5) */
//___________________________________________________________________________________________________

/*
function schuineZijde(x,y){
    var zijdeZ = Math.sqrt(Math.pow(x,2) + Math.pow(y,2));
    return zijdeZ;
}

//---------------------
'use strict';
console.log('Functie: stelling van Pythagoras');
var toetsenbord = require('readline-sync');

var a = parseInt(toetsenbord.question("Geef rechthoekzijde a:  "));
var b = parseInt(toetsenbord.question("Geef rechthoekzijde b:  "));
var c = schuineZijde(a,b);

console.log("De schuinezijde is %s cm lang.", c);

*/


//___________________________________________________________________________________________________
/*
Fies03 (gemakkelijk)
Een tweedegraadsvergelijking is een vergelijking van de vorm ax2 + bx + c waarbij a, b en c getallen zijn.  
Schrijf een functie die de discriminant van een tweedegraadsvergelijking met gegeven a, b en c teruggeeft volgens de formule b2 – 4*a*c.

Schrijf een functie die het aantal nulpunten van een tweedegraadsvergelijking met gegeven a, b en c teruggeeft. 
 Dit aantal is gelijk aan 
•	0 als de discriminant van de vergelijking strikt negatief is
•	1 als de discriminant van de vergelijking gelijk is aan 0
•	2 als de discriminant strikt positief is
Test deze functies door aan de gebruiker de waarden voor a, b en c te vragen en de discriminant en het aantal nulpunten te tonen.  
Ter controle:
a	b	c	       discriminant	       aantal nulpunten
1	2	3	             -8	                0
2	4	2	              0	                1
5	1	0	              1	                2                   */
//___________________________________________________________________________________________________

/*

function discriminant(a,b,c){
   return Math.pow(b,2) - 4*a*c;    // 1 STAP RETURN                //  b2 – 4*a*c.
   
}

function aantalNulpunten(a,b,c){
    var discri = Math.pow(b,2) - 4*a*c;
    // hoeveel nullen??????????????????????????????????????


    } 
    return nullen;
}

//---------------------
'use strict';
console.log('Functie: tweedegraadsvergelijking');
var toetsenbord = require('readline-sync');
var a = parseInt(toetsenbord.question("Geef a:  "));
var b = parseInt(toetsenbord.question("Geef b:  "));
var c = parseInt(toetsenbord.question("Geef c:  "));

var uitkomst = discriminant(a,b,c);
console.log("De discriminant = %s",uitkomst);

var aantalNullen = aantalNulpunten(a,b,c);
console.log("Het aantalnulpunten in dit discriminant = %s",aantalNullen);


*/
//___________________________________________________________________________________________________
/*
Fies04
Schrijf een functie die teruggeeft of een gegeven jaar wel of niet een schrikkeljaar is.
Een jaar is een schrikkeljaar als het deelbaar is door 4, maar niet deelbaar door 100.  Het is toch een schrikkeljaar als het deelbaar is door 400.
Test deze functie door te tonen of volgende jaren wel of niet een schrikkeljaar zijn:
Jaar	Schrikkeljaar?
2000	Ja
1900	Nee
2016	Ja
2017	Nee

*/
//___________________________________________________________________________________________________

function schrikkeljaar(x){      //geef jaar 
    var mod4 = x % 4;
    var mod100 = x % 100;           // als 2000 MOD 4 = 0    &&  2000 MOD 100 != 0  
                                  
           if (mod4 = 0 && mod100 != 0 ) {       // wel deelbaar door 4  && niet door 100
               //true
               console.log("Ja, %s is een schrikkeljaar!", x);

           } else {
               //false 
               console.log("Nee, %s is geen schrikkeljaar!", x); 
           }    
           
           
        } else if (mod400 = 0) {
            //false 
            console.log("Nee, %s is geen schrikkeljaar!", x);
            
        }
                                       
                                    // wel deelbaar door 400



    return schrikj;
}

//---------------------
'use strict';
console.log('Functie: stelling van Pythagoras');
var toetsenbord = require('readline-sync');

var jaar = parseInt(toetsenbord.question("Geef jaar in:  "));
var schrikkeljaar = schrikkeljaar(x);

console.log("Het jaar %s is een %s.", jaar, schrikkeljaar);

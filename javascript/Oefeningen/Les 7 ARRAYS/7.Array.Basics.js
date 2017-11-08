'use strict';

// Declartie van een array
var myList;
// creatie van een array
myList = new Array();  // array constructor 

// SNELLER 
myArray = [];  // array constructor 
myArray.push("Appel");
myArray.push("Annanas");

// OF Beter
var myBucketList = ["Get engaged", "Visit Japan"];


//---------------------------------------------------------------------
// hoeveel elementen
var aantalElementen = myList.length;
console.log("myList bevat %s elementen", aantalElementen);
console.log("myBucketList bevat %s elementen", aantalElementen);
console.log(myBucketList);

// 5 elementen toevoegen aan lijst     bv: 10 20 30 40 50
for (var i = 0; i < 5; i++) {
    myList[i] = (i + 1) * 10;            // steekt elke loop nieuw getal in array !
}
// hoeveel elementen zitten er in een array?
console.log("aantal elementen in myList is nu %s", myList.length);
console.log(myList); // PRINT LIJST

// 1ste element overschrijven 
myList[0] = 0;
console.log(myList);

// Laatste element overschrijven
myList[myList.length - 1] = "Im the end now!";
console.log( myList );

// Alle elementen 1 voor 1 overlopen en Printen op scherm
console.log("1 voor 1 array For loop:");
for (var i = 0; i < myList.length; i++) {
    console.log( myList[i] );
}

// Alle elementen 1 voor 1 OMDRAAIEN en Printen op scherm       REVERSE
console.log("1 voor 1 OMdraaien For loop:");
for (var i = myList.length; i >= 0; i--) {
    console.log (myList[i] );
}

// ADD element to ARRAY or multiple ARRAYS
myList[ myList + 3 ] = "Kiekeboe";          // nieuwe positie  op 3de plaats 1 en 2 zijn undefined
console.log( myList );
for (var i = myList.length-1; i>=0 ;i--){
    console.log (myList[i] );
}

// Element toevoegen achteraan
myList.push("Bannanana");
console.log( myList );
// OF
myList.push("Bannanana");
console.log( myList );
/*
Oefening
Breid het Number object uit met een functie pad(num, size, char) die een doorgegeven getal num vooraan aanvult met het doorgegeven karakter kar tot het doorgegeven lengte size heeft. Het volgende statement moet waarde ‘0012’ aan s toekennen. 
var s = Number.pad(12,4,’0’); */
'use strict';

Number.pad= function(getal, size, char){
	let stringNo = getal.toString();			// 12 to "12"
	if (stringNo.length < size) {				// length 3 < 4 size
		let teller = size - stringNo.length;	//  1 = 4-3
		for (let i = 0; i < teller; i++) {		// 0 tot teller 
			stringNo = char + stringNo;
		}
		return stringNo;
	} else if (stringNo.length == size) {
		return stringNo;
	} else {
		let error = "number bigger than length";
		return error;
	}
}

console.log(Number.pad(12,4,"0"));
var getal = 5;
console.log(Number.pad(getal, 4, '0'))
var getal = 10;
console.log(Number.pad(getal, 4, '0'))
var getal = 100;
console.log(Number.pad(getal, 4, '0'))



'use strict';
// if ( altijd ronde haken) {
								//  IF BLOCK }

								// else ( altijd ronde haken) {
								//  ELSE-BLOCK }

var datum = new Date();			// datum en tijd van VANDAAG opvragen!! 
var uur = datum.getHours();		// vraag enkel het uur op GET HOURS
if (uur < 12) {
	console.log("Goedemorgen"); // als het voormiddag is bv 09:00
} else {
	console.log("Goedenamiddag"); // als het namiddag is bv 13:00
}
 

// als ELSE leeg is dan mag je ook ELSE deleten !! 
} else {
	console.log("Goedenamiddag"); // als het namiddag is bv 13:00
}

// Twee statements in het IF BLOCK
if (uur < 12) {
	console.log("Goedemorgen"); // als het voormiddag is bv 09:00
	console.log("Hoe is het met jou"); // als het voormiddag is dan ook hallo

	// ALS IF maar 1 block heeft mag je ; weglaten !!!

	// GEEN { } met 2 statements telt enkel het 1ste daarom { beide erin !!}

	if (uur !: 12) {
		console.log("Geen middag pauze"); // als het geen middag is <> 12 uur.. 
	}
	else {
		console.log("Goedenamiddag"); // Dan wel goedemiddag als het 12 u is 
	}

//  
if (uur >= 9 && uur <= 12) {			// && = AND .... moet voorwaarde voor && en na staan !
	console.log("Nu is het werken tijd"); // als het na 9 is en voor 12
}
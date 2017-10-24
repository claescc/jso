'use strict';

var datum = new Date();
var uur = datum.getHours();
if (uur == 9) { 		// gelijk aan is == en wordt is = Kijkt niet naar TYPE
	console.log("Tussen 9 en 10 kan je eens naar koffie zien");

} else if (uur == 12) {
	console.log("Tussen 12 en 1 eet iedereen"); // else if dan...

} else if (uur == 18) {
	console.log("Tussen 6 en 7 begint een werkmens te leven");// else if dan...

} else {
	console.log("Werk maar rustig verder");// else dan...
}

// TRIPPLE ===
if (uur === 9) { 		// zelfe type en waarde zijn  === geeft een integer terug
	console.log("Tussen 9 en 10 kan je eens naar koffie zien");
	// uur is een getal en 9 is een string dus NIET ZELFDE TYPE daarom Else !!

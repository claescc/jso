/* vooraf:  verifieer dat bestand bestanden/input.txt bestaat */

// ASYNCROON - NON BLOCKING FUNCTIES 
var fs = require("fs");
console.log("Starting read from file");
fs.readFile('bestanden/input.txt', function (err, data) { // error , data gelezen
    if (err) {
    	return console.error(err); // toon fout in console
    	}
    console.log(data.toString());
});

/* in de output verschijnt onderstaande zin (hoogstwaarschijnlijk) voor de inhoud van input.txt*/ 
console.log("Program Ended");
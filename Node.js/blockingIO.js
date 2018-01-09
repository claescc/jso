/* vooraf:  verifieer dat bestand bestanden/input.txt bestaat */


// SYNCROON 
var fs = require("fs");
console.log("Starting read from file");
var data = fs.readFileSync('bestanden/input.txt'); // gaat pas verder als alles gelzen is 
console.log(data.toString());
/* in de output verschijnt onderstaande zin na de inhoud van input.txt*/
console.log("Program Ended");

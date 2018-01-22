/*
 * vooraf:  npm install mysql 
 */

var toetsenbord = require('readline-sync');
let kleur = toetsenbord.question("Geef een kleur: ");

var mysql      = require('mysql');
var connection = mysql.createConnection({ // geef object aan door
  host     : 'localhost',
  user     : 'root', // claes
  password : 'root', 
  database : 'deschop', // database 
  port     : 3306 // poort waarop database luistert 
});

connection.connect(); // 1st 

connection.query("SELECT plantennaam, kleur from planten WHERE kleur='" + kleur + "'", function(err, rows, fields) {
  if (!err){
    var result = JSON.stringify(rows); // maak een string want clients sturen moet string zijn 
    console.log(result);
  }
  else{
    console.log('Error while performing query.');
    console.log(err.message);
	}
    connection.end(); // 2ed 
});

/*
 * vooraf:  npm install mysql 
 */
var mysql      = require('mysql');
var connection = mysql.createConnection({ // geef object aan door
  host     : 'localhost',
  user     : 'root', // claes
  password : 'root', 
  database : 'deschop', // database 
  port     : 3306 // poort waarop database luistert 
});

connection.connect(); // 1st 

// 1ste parameter = string met SQL commando !! 
// bij antwoord wordt functie uitgevoerd 
// error obj , rows is het antwoord zonder fout array met 1 object, fields kolom opvraging
connection.query('SELECT * from planten', function(err, rows, fields) {
  if (!err){
    var result = JSON.stringify(rows); // maak een string want clients sturen moet string zijn 
    console.log(result);
  }
  else{
    console.log('Error while performing query.');
	}
});

connection.end(); // 2ed 

// max 2 connection toegelaten
/*
 * vooraf:  npm install mysql 
 */

/* INSERT */

function insertRecord(row, callback) {
	var mysql = require('mysql'); // altijd nodig deze block
	var connection = mysql.createConnection({
		host: 'localhost',
		user: 'root',
		password: 'root',
		database: 'deschop',
		port: 3306
	});

	connection.connect(); // INSERT ipv SELECT 
	connection.query('INSERT INTO leveranciers SET ?', row, function (err, result) {
		if (err) {
			callback(err, result);

		} else {
			callback(null, result);
		}
		connection.end();
	});
}

var row = { lev_code: '997', lev_naam: 'GROTE SMURF 2', adres: 'Paddenstoel 1', woonplaats: 'Smurfendorp', korting: 0 };
insertRecord(row, function (err, result) {
	// functie wordt uitegvoerd na toevoeging 
	if (err) {
		console.log('Error while performing query.');
		console.log(err);
	}
	else { // geen SELECT bv INSERT --> Object terug.affectedRows
		console.log("%d rows affected", result.affectedRows);
		if (result.affectedRows == 1) {
		}
	}
});   

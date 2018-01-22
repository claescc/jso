var toetsenbord = require('readline-sync');
let code = toetsenbord.question("Geef lev_code: ");


function updateRecord(code, callback) {
	var mysql = require('mysql');
	var connection = mysql.createConnection({
		host: 'localhost',
		user: 'root',
		password: 'root',
		database: 'deschop',
		port: 3306
	});
			// UPDATE ipv SELECT
	connection.connect();
	connection.query('DELETE FROM leveranciers WHERE lev_code = ?',
		code, function (err, result) {
			if (err) {
				callback(err, result);

			} else {
				callback(null, result);
			}
			connection.end();
		});
}


updateRecord(code, function (err, result) {
	if (err) {
		console.log('Error while performing query.');
		console.log(err);
	}
	else { // geen SELECT bv UPDATE --> Object terug.affectedRows
		console.log("%d rows affected", result.affectedRows);
	}
});   

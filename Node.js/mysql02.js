/*
 * vooraf:  npm install mysql 
 */

var mysql = require('mysql');
var connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'root',
  database: 'deschop',
  port: 3307
});

// beveiliging tegen SQL injectie 
// ?? = plaatshouder voor kollom of tabel naam
// array = naam van die tabelen of kollomen moet overeenkomen mte vraagtekens !!
// ?? = A ?? = B ?? = C
connection.connect();
var identifiers = ['plantennaam', 'kleur','planten'];
connection.query('SELECT ??, ?? from ??', identifiers, function (err, rows, fields) {
  if (!err) {
    var result = JSON.stringify(rows);
    console.log(result);
  }
  else {
    console.log('Error while performing query.');
  }
  connection.end();
<<<<<<< HEAD
});
=======
});
>>>>>>> c21dbb7c4e747cf399005e6c9da346aaa38e1b19

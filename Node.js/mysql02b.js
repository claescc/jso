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

var kleur = "rood";
connection.connect();
var identifiers = ['plantennaam', 'planten', 'kleur', kleur];
// 1 ? = hier moet een waarde komen 
// ?? + ? , array 
// voordeel ? --> hacken nt mogelijk geen sql injectie meer  
connection.query('SELECT ?? from ?? WHERE ?? = ?', identifiers, function (err, rows, fields) {
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

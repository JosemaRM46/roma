// backend/db.js
const mysql = require('mysql');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '1234',
  database: 'roma'
});

connection.connect((err) => {
  if (err) {
    console.error('Error connecting to MySQL:', err);
    return;
  }
  console.log('Connected to MySQL!');

  // Verificar la conexión con una consulta simple
//   connection.query('SELECT 1 + 1 AS solution', (err, results, fields) => {
//     if (err) throw err;
//     console.log('The solution is: ', results[0].solution);
//   });
});

module.exports = connection;
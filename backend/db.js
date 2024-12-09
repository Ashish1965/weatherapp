const mysql = require('mysql2');

// MySQL Connection
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'weatherapp',
});

connection.connect((err) => {
  if (err) throw err;
  console.log('Connected to MySQL Database');
});

module.exports = connection;

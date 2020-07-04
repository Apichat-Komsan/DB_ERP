const mysql = require('mysql')
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'db_erp'
});

db.connect((err) => {
  if (err) {
    throw err;
  } else {
    console.log('Connect mySQL success');
  }
});

module.exports = db
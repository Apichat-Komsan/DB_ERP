const mysql = require('mysql')
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'Tbnoung001',
  database: 'erp',
  port:3307
});
// Test

db.connect((err) => {
  if (err) {
    throw err;
  } else {
    console.log('Connect mySQL success');
  }
});

module.exports = db
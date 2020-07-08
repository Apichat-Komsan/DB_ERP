const mysql = require('mysql')
const db = mysql.createConnection({
  host: "192.168.0.101",
  user: "root",
  password: "Tbnoung001",
  database: "erp",
  port: 3307,
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
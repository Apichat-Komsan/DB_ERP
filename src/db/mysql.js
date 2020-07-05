const mysql = require('mysql')
const db = mysql.createConnection({
  host: '203.154.83.226',
  user: 'root',
  password: 'Tbnoung001',
  database: 'erp'
});

db.connect((err) => {
  if (err) {
    throw err;
  } else {
    console.log('Connect mySQL success');
  }
});

module.exports = db
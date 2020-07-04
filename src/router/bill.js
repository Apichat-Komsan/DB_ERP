const express = require('express')
const router = new express.Router()
const db = require('../db/mysql')
function generate(num) {
  var n = 0;
  var string = "" + num;
  var pad = "0000";
  n = pad.substring(0, pad.length - string.length) + string;
  num++;
  return `A2563${n}`;
}

router.get('/bill', (req, res) => {
  let sql = 'SELECT * FROM bill'
  let query = db.query(sql, (err, result) => {
    if (err) throw err;
    if (result.length === 0) {
      res.send({ Message: 'ERROR' })
    } else {
      res.send({ result, Message: 'OK' })
    }
  })
})
router.post('/addbill', (req, res) => {
  const data = req.body
  // console.log('generate', generate(20));
  let count = 'SELECT COUNT(id) AS count FROM bill'
  let querycount = db.query(count, (err, rows) => {
    data.id_bill = generate(rows[0].count + 1)
    console.log('ข้อมูลที่รับจาก front', data)
    let sql = 'INSERT INTO bill SET ?'
    let query = db.query(sql,data,(err, result) => {
      if(err) throw err;
      if (result.length === 0) {
        res.send({ Message: 'ERROR' })
      } else {
        res.send({ result, Message: 'Success',id_bill: data.id_bill })
      }
    })
  })
})

router.post('/getbill', (req, res) => {
  const data = req.body
  console.log('ข้อมูลที่รับจาก front', data)
  let sql = 'SELECT * FROM bill   WHERE id_bill = ?'
  let query = db.query(sql, [data.id_bill], (err, result) => {
    if (err) throw err;
    if (result.length === 0) {
      res.send({ Message: 'ERROR' })
    } else {
      console.log(result.length)
      res.send({ result, Message: 'OK' })
    }
  })
})

module.exports = router
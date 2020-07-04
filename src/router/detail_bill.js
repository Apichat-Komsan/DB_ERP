const express = require('express')
const router = new express.Router()
const db = require('../db/mysql')

router.post('/adddetailbill', (req, res) => {
  const data = req.body
  console.log('data',data);
  let sql = 'INSERT INTO detail_bill SET ?'
  let query = db.query(sql, data, (err, result) => {
    if (err) throw err;
    if (result.length === 0) {
      res.send({ Message: 'ERROR' })
    } else {
      res.send({ result, Message: 'OK' })
    }
  })
})

router.post('/getdetailbill', (req, res) => {
  const data = req.body.id_bill
  console.log('data', data);
  let sql = 'SELECT * FROM detail_bill WHERE id_bill = ?'
  let query = db.query(sql, data, (err, result) => {
    if (err) throw err;
    if (result.length === 0) {
      res.send({ Message: 'ERROR' })
    } else {
      res.send({ result, Message: 'OK' })
    }
  })
})

module.exports = router
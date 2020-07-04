const express = require('express')
const router = new express.Router()
const db = require('../db/mysql')

router.get('/stock', (req, res) => {
  let sql = 'SELECT * FROM stock'
  let query = db.query(sql, (err, result) => {
    if (err) throw err;
    if (result.length === 0) {
      res.send({ Message: 'ERROR' })
    } else {
      res.send({ result, Message: 'OK' })
    }
  })
})

router.post('/stock', (req, res) => {
  const data = req.body.name
  console.log('ข้อมูลที่รับจาก front', data)
  let sql = 'SELECT * FROM stock WHERE name = ?'
  let query = db.query(sql,[data], (err, result) => {
    if (err) throw err;
    if (result.length === 0) {
      res.send({ Message: 'ERROR' })
    } else {
      res.send({ result, Message: 'OK' })
    }
  })
})

router.patch('/stock', (req, res) => {
  const data = req.body
  console.log('ข้อมูลที่รับจาก front', data)
  let sql = 'UPDATE stock  SET quality = ? WHERE id_stock = ?'
  let query = db.query(sql, [data.quality,data.id_stock], (err, result) => {
    if (err) throw err;
    if (result.length === 0) {
      res.send({ Message: 'ERROR' })
    } else {
      console.log(result.length)
      res.send({ result, Message: 'Success' })
    }
  })
})
module.exports = router
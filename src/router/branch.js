const express = require('express')
const router = new express.Router()
const db = require('../db/mysql')

router.get('/getbranch', (req, res) => {
  let sql = 'SELECT * FROM branch'
  let query = db.query(sql, (err, result) => {
    if (err) throw err;
    if (result.length === 0) {
      res.send({ Message: 'ERROR' })
    } else {
      res.send({ result, Message: 'OK' })
    }
  })
})
router.post('/getbranch', (req, res) => {
  const data = req.body.purchaser
  console.log('data', data);
  let sql = 'SELECT * FROM branch WHERE name = ?'
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
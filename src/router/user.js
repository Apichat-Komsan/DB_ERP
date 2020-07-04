const express = require('express')
const router = new express.Router()
const db = require('../db/mysql')

router.get('/test', (req, res) => {
  let sql = 'SELECT * FROM user'
  let query = db.query(sql, (err, result) => {
    if (err) throw err;
    if (result.length === 0) {
      res.send({ Message: 'ERROR' })
    } else {
      res.send({ result, Message: 'OK' })
    }
  })
})
module.exports = router
const express = require('express')
const router = new express.Router()
const db = require('../db/mysql')

router.post('/getbranchstock', (req, res) => {
  const data = req.body.id_branch
  console.log('ข้อมูลที่รับจาก front' ,data)
  let sql = 'SELECT * FROM branch_stock  LEFT JOIN stock ON branch_stock.id_stock = stock.id_stock WHERE branch_stock.id_branch = ?'
  let query = db.query(sql, [data], (err, result) => {
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
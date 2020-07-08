const express = require("express")
const app = express()
const port = process.env.PORT || 3000
// const userRouter = require('./router/user')
// const branchRouter = require('./router/branch')
// const billRouter = require('./router/bill')
// const branchstockRouter = require('./router/branch_stock')
// const stockRouter = require('./router/stock')
// const detailbillRouter = require('./router/detail_bill')
// var cors = require('cors')

// app.use(cors())
// app.use(express.json())
// app.use(userRouter)
// app.use(branchRouter)
// app.use(billRouter)
// app.use(branchstockRouter)
// app.use(stockRouter)
// app.use(detailbillRouter)
app.get('/',(req,res) => {
  res.send('Connection Success')
})

app.listen(port, () => {
  console.log("Server start in port " + port);
});
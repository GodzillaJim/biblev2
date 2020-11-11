const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const cors = require('cors')
const routes = require('./routes/routes.js')

app.use(bodyParser())
app.use(cors())

app.listen(4500 || process.env.PORT, function(){
  console.log("LIstening on port: " + process.env.PORT || 4500)
})
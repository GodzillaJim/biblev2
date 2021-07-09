const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const cors = require('cors')
const routes = require('./routes/routes.js')

app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extend: true}))
app.use(express.static('../public/'))

app.all(routes)
app.listen(4500, function(){
  console.log("Listening on port: " + process.env.PORT || 4500)
})
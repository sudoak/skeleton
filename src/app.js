//Include env files
require('dotenv').config()

//DB config
require('./config/db')
//Logs
let {logs} = require('./config/opts')()
logs.info("LOL")
//Modal
let R = require('./modal/records.schema')

var express = require('express')
var bodyParser = require('body-parser')
var morgan = require('morgan')
var cors  = require('cors')
var app = express()

app.use(bodyParser.urlencoded({
	extended: false
}))
app.use(morgan("dev"))
app.use(cors())
app.use(bodyParser.json())






//App Listening
app.listen(process.env.PORT, () => console.log(`Example app listening on port ${process.env.PORT}!`))
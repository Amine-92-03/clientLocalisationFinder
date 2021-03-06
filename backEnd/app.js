const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const apiRoutes = require('./routes/apiRoute')


app.use(bodyParser.json())
app.use('/api', apiRoutes)
app.use(express.static('../FrontEnd'))

module.exports = app
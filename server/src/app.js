// console.log('hello')
const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
//const morgan = require('morgan')
const config = require('./config/config')

//datebase setup
const {sequelize} = require('./models')

const app = express() // create your express app
//app.use(morgan('combined')) // log requests source if needed
app.use(bodyParser.json()) // parse json requests
app.use(cors()) // enable cors

//get
//post
//put
//delete
//patch

// routes (endpoints)
require('./routes')(app)


sequelize.sync()
.then(() => {
    app.listen(config.port)
    console.log(`Server started on port ${config.port}`)
})

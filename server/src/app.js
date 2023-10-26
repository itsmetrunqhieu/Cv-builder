// console.log('hello')
const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
//const morgan = require('morgan')
const config = require('./config/config')

//datebase setup
const db = require('./models/index.js')
const PORT = 5000

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
// require('./routes')(app)


db.sequelize.sync({force: true})
.then((req) => {
    app.listen(PORT)
    console.log(`Server started on port ${PORT}`)
})

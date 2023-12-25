const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const morgan = require("morgan");
require("dotenv").config();
// const config = require("./config/config");

//export router
const userRouter = require(`./routes/user.route`);
const authRouter = require("./routes/auth.route");
const CV_tmpltRouter = require("./routes/CVtmplt.route");

//datebase setup
const db = require("./models/index.js");
const PORT = 5000;

const app = express(); // create your express app
//app.use(morgan('combined')) // log requests source if needed
app.use(bodyParser.json()); // parse json requests
app.use(cors()); // enable cors
app.use(express.json());
//get
//post
//put
//delete
//patch
app.use("/api/user", userRouter);
app.use("/api/auth", authRouter);
app.use("/api/CVtmplt", CV_tmpltRouter);
app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  const message = err.message || "Internal Server Error";
  return res.status(statusCode).json({
    success: false,
    statusCode,
    message,
  });
});

// routes (endpoints)
// require('./routes')(app)

db.sequelize.sync().then((req) => {
  app.listen(PORT);
  console.log(`Server started in port ${PORT}`);
});

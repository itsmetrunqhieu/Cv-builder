const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const morgan = require("morgan");
require("dotenv").config();
const { engine } = require("express-handlebars");
const cookieParser = require("cookie-parser");
const { errorHandler } = require("./utils/error.js");
// const config = require("./config/config");

//export router
const userRouter = require(`./routes/user.route`);
const authRouter = require("./routes/auth.route");
const CV_tmpltRouter = require("./routes/CVtmplt.route");
const CVRouter = require("./routes/CV.route");

//datebase setup
const db = require("./models/index.js");
const PORT = 5000;

const app = express(); // create your express app
//app.use(morgan('combined')) // log requests source if needed
app.use(bodyParser.json()); // parse json requests
app.use(cors()); // enable cors
app.use(express.json());
app.use(cookieParser());

// Set up Handlebars
app.engine(".hbs", engine({ extname: ".hbs" }));
app.set("view engine", ".hbs");
app.set("views", "./views");
//get
//post
//put
//delete
//patch
app.use("/api/user", userRouter);
app.use("/api/auth", authRouter);
app.use("/api/CVtmplt", CV_tmpltRouter);
app.use("/api/CV", CVRouter);

app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  const message = err.message || "Internal Server Error";
  const error = errorHandler(statusCode, message);
  return res.status(statusCode).json({
    success: false,
    error,
  });
});

// routes (endpoints)
// require('./routes')(app)

db.sequelize.sync().then((req) => {
  app.listen(PORT);
  console.log(`Server started in port ${PORT}`);
});

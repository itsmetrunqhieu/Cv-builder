const { User } = require("../models");
const bcryptjs = require("bcryptjs");
const errorHandler = require("../utils/error");
const jwt = require("jsonwebtoken");
const nodemailer = require("nodemailer");

function getSurname(fullname) {
  // first word is surname for vietnamese name
  return fullname.split(" ")[0];
}

function getFirstname(fullname) {
  // last word is firstname for vietnamese name
  return fullname.split(" ").slice(-1)[0];
}

const signup = async (req, res, next) => {
  try {
    const { email, username, fullname, phone, password, role } = req.body;
    //console.log(req.body);
    const hashPassword = bcryptjs.hashSync(password, 10);
    //console.log(email, username, password, role);
    const [newUser, created] = await User.findOrCreate({
      where: { email },
      defaults: { 
        name: username,
        fullname: fullname,
        firstname: getFirstname(fullname),
        surname: getSurname(fullname),
        phone: phone,
        password: hashPassword, 
        role: role,
      },
    });
    if (created) {
      return res.status(201).json(newUser);
    } else return res.status(400).json({ msg: "User already existed" });
    //res.status(201).json(newUser);
  } catch (err) {
    // console.log(err);
    next(err);
  }
};

const signin = async (req, res, next) => {
  const { email, password } = req.body;
  console.log(req.body);
  try {
    const validUser = await User.findOne({ where: { email } });
    if (!validUser) return next(errorHandler(404, "User not found!"));
    const validPassword = bcryptjs.compareSync(password, validUser.password);
    if (!validPassword) return next(errorHandler(401, "Wrong password!"));
    const token = jwt.sign({ id: validUser.id }, process.env.JWT_SECRET);
    res.cookie("access_token", token, { httpOnly: true }).status(200).json({
      validUser,
      cookie: token,
    });
  } catch (error) {
    console.log(error);
    next(error);
  }
};

const transporter = nodemailer.createTransport({
  service: "hotmail",
  auth: {
    user: "onlinecvpr@hotmail.com",
    pass: "123asdASD",
  },
});

const forgotpassword = async (req, res, next) => {
  try {
    const { email } = req.body;
    const validUser = await User.findOne({ where: { email } });
    if (!validUser)
      return next(errorHandler(404, "No user created with this email!"));
    const token =
      ({ id: validUser.id }, process.env.JWT_SECRET, { expiresIn: "15m" });
    const link = `<a href=localhost:3000/resetpassword/${validUser.id}/${token}>ResetPassword</a>`;

    const resetmail = {
      from: "onlinecvpr@hotmail.com",
      to: validUser.email,
      subject: "Reset password request",
      text: "Your password can be reset by clicking Reset password link below, the link will be expired after 15m\nIf you did not request, please ignore this email.",
      html: link,
    };

    transporter.sendMail(resetmail);
    console.log(email, id, "reset password");
    res.status(
      200,
      "A reset password link has been sent to your email to reset your password"
    );
  } catch (err) {
    next(err);
  }
};

const resetpassword = async (req, res, next) => {
  try {
    const { id, token } = req.params;
    const { password } = req.body;
    console.log(id, password, token);
    const hashPassword = bcryptjs.hashSync(password, 10);
    jwt.verify(token, process.env.JWT_SECRET);
    const update = await User.update(
      { password: hashPassword },
      { where: { id: id } }
    );
    if (!update)
      return next(errorHandler(500, "update failed, please try again later."));
    res.status(200, "You have successfully change your password");
  } catch (err) {
    next(err);
  }
};

module.exports = {
  signup,
  signin,
  forgotpassword,
  resetpassword,
};

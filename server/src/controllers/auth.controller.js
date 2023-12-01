const { User } = require("../models");
const bcryptjs = require("bcryptjs");
const errorHandler = require("../utils/error");
const jwt = require("jsonwebtoken");

const signup = async (req, res, next) => {
  try {
    const { email, name, password, role } = req.body;
    const hashPassword = bcryptjs.hashSync(password, 10);
    console.log(email, name, password, role);
    const [newUser, created] = await User.findOrCreate({
      where: { email },
      defaults: { name, password: hashPassword, role },
    });
    if (created) {
      return res.status(201).json(newUser);
    } else return res.status(400).json({ msg: "User already existed" });
    //res.status(201).json(newUser);
  } catch (err) {
    next(err);
  }
};

const signin = async (req, res, next) => {
  const { email, password } = req.body;
  try {
    const validUser = await User.findOne({ where: { email } });
    if (!validUser) return next(errorHandler(404, "User not found!"));
    const validPassword = bcryptjs.compareSync(password, validUser.password);
    if (!validPassword) return next(errorHandler(401, "Wrong credential!"));
    const token = jwt.sign({ id: validUser.id }, process.env.JWT_SECRET);
    res
      .cookie("access_token", token, { httpOnly: true })
      .status(200)
      .json(validUser);
  } catch (error) {
    next(error);
  }
};

module.exports = {
  signup,
  signin,
};

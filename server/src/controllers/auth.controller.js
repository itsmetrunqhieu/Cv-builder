const { User } = require("../models");
const bcryptjs = require("bcryptjs");
const signup = async (req, res) => {
  try {
    const { email, name, password, role } = req.body;
    const hashPassword = bcryptjs.hashSync(password, 10);
    console.log(email, name, password, role);
    const [newUser, created] = await User.findOrCreate({
      where: { email },
      defaults: { name, password: hashPassword, role },
    });
    if (created) {
      return res.status(400).json(newUser);
    } else return res.status(400).json({ msg: "User already existed" });
    //res.status(201).json(newUser);
  } catch (err) {
    res.status(400).json(err);
  }
};

module.exports = signup;

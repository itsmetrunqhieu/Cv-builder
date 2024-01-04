const { User } = require("../models");
const jwt = require("jsonwebtoken");

const test = (req, res) => {
  res.json({
    message: "Hello World",
  });
};

const updateUser = async (req, res, next) => {
  try {
    var id = req.user.id;
    const {
      role,
      fullname,
      firstname,
      surname,
      phone,
      jobTitle,
      employer,
      citymunicipality,
      country,
    } = req.body;

    const profileImg_dir = req.file.path;
    const finduser = await User.findByPk(id);
    if (!finduser) return res.status(404).json({ msg: "User not found" });
    finduser.set({
      role: role,
      fullname: fullname,
      firstname: firstname,
      surname: surname,
      phone: phone,
      jobTitle: jobTitle,
      employer: employer,
      citymunicipality: citymunicipality,
      country: country,
      profileImg_dir: profileImg_dir,
    });
    await finduser.save();
    console.log("User update information:\nID: " + id);
    console.log(req.body);
    return res.status(200).json({ msg: "User's information updated" });
  } catch (error) {
    console.log(error);
    next(error);
  }
};

module.exports = { test, updateUser };
//fsmegasale15
//sieutuyet20

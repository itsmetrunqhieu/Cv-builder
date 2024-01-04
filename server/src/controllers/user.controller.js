const { User } = require("../models");
const jwt = require('jsonwebtoken');

const test = (req, res) => {
  res.json({
    message: "Hello World",
  });
};

const updateUser = async (req, res, next) => {
  try {
    const cookiestr = req.headers.cookie;
    const cookies=cookiestr.split(/[;=]+/);
    for (let index = 0; index < cookies.length; index+=2) {
      if (cookies[index]==="access_token"){
        var token = cookies[index+1];
        break
      }
    }
    if (!token) return res.status(401).send({msg: "User has not log in"});
    var id = jwt.verify(token, process.env.JWT_SECRET).id;
    const { role, fullname, firstname, surname, phone, jobTitle, employer, citymunicipality, country } = req.body;
    const finduser = await User.findByPk(id);
    if (!finduser) return res.status(404).json({msg: "User not found"});
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
    });
    await finduser.save();
    console.log("User update information:\nID: "+id);
    console.log(req.body);
    return res.status(200).json({msg: "User's information updated"});
  } catch (error) {
    console.log(error);
    next(error);
  }
}

module.exports = {test, updateUser};
//fsmegasale15
//sieutuyet20

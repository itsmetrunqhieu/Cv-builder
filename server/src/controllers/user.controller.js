const { User } = require("../models");

const test = (req, res) => {
  res.json({
    message: "Hello World",
  });
};

const updateUser = async (req, res, next) => {
  try {
    const id = req.params.id;
    const { fullname, firstname, surname, phone, jobTitle, employer, citymunicipality, country } = req.body;
    console.log (req.body);
    const finduser = await User.findByPk(id);
    if (!finduser) return res.status(404).json({msg: "User not found"});
    finduser.set({
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
    return res.status(200).json({msg: "User's information updated"});
  } catch (error) {
    console.log(error);
    next(error);
  }
}

module.exports = {test, updateUser};
//fsmegasale15
//sieutuyet20

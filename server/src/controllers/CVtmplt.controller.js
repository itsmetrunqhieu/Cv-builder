const { CV_tmplt } = require("../models");

const insertTmplt = async (req, res, next) => {
  try {
    if (req.file) {
      const filePath = req.file.path;
      const [newCVtmplt, created] = await CV_tmplt.findOrCreate({
        where: { html_dir: filePath },
      });
      if (created) {
        return res.status(201).json(newCVtmplt);
      } else return res.status(400).json({ msg: "Template already existed" });
    } else {
      res.status(404), json({ message: "File not found" });
    }
  } catch (err) {
    console.log(err);
    next(err);
  }
};

const deleteTmplt = async (req, res, next) => {
  try {
    CV_tmplt.findOr;
  } catch (error) {}
};

const getTmplt = async (req, res, next) => {
  try {
  } catch (error) {}
};
module.exports = {
  insertTmplt,
  getTmplt,
  deleteTmplt,
};
// (Opinion) Use directory instead of string?
// A html template consist more than 5k character

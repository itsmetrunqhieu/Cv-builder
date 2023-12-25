const fs = require("fs");
const path = require("path");
const { CV_tmplt } = require("../models");

const insertTmplt = async (req, res, next) => {
  //read html file as a string
  // fs.readFile(tmpltpath, "utf-8", async (err, htmlstr) => {
  //   if (err) {
  //     console.error(err);
  //     return;
  //   }
  //   //Find the exact template if exist(avoid duplicate). If not, insert html string to database
  //   [new_tmplt, created] = await cv_tmplt.findOrCreate({
  //     where: { htmlstr },
  //     default: { previewdir, htmlstr },
  //   });
  // });
  // if (created) {
  //   console.log("Template already exist");
  //   return;
  // } else {
  //   console.log("Insert Template successfully");
  //   return;
  // }
  try {
    if (req.file) {
      const filePath = req.file.path;
      const [newCVtmplt, created] = await CV_tmplt.findOrCreate({
        where: { filePath },
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

const deleteTmplt = async (req,res,next) ={

}

module.exports = {
  inserTmplt,
  deleteTmplt
};
// (Opinion) Use directory instead of string?
// A html template consist more than 5k character

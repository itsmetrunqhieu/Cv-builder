const { CV_tmplt } = require("../models");
const fs = require("fs");
const path = require("path");
const errorHandler = require("../utils/error");

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
    const tmpltId = req.params.id;

    const deltmplt = await CV_tmplt.findByPk(tmpltId);
    if (!deltmplt) return res.status(404).json({ msg: "Template not found" });
    console.log("Deleting From Database Template ID: " + tmpltId);
    await deltmplt.destroy();
    console.log("Template Deleted From Database");
    return res.status(200).json({ msg: "Template Deleted From Database" });
  } catch (error) {
    console.log(error);
    next(error);
  }
};

const getTmplt = async (req, res, next) => {
  try {
    const fileId = req.params.id;

    const fileRecord = await CV_tmplt.findByPk(fileId);
    console.log(fileRecord.html_dir, typeof fileRecord.html_dir);

    if (!fileRecord) {
      return res.status(404).send("File not found");
    }
    // Read the file from the file system, make a copy, and send it
    const originalFilePath = path.join(
      __dirname,
      "../../",
      `${fileRecord.html_dir}`
    ); // Adjust based on how you store the path
    const tempFilePath = path.join(
      __dirname,
      "../../",
      `copy-${path.basename(fileRecord.html_dir)}`
    ); // Create a temporary path to store the copy
    console.log(originalFilePath, typeof originalFilePath);
    console.log(tempFilePath, typeof tempFilePath);
    fs.copyFile(originalFilePath, tempFilePath, (error) => {
      if (error) {
        errorHandler(500, "Could not process the file");
      }
      res.sendFile(tempFilePath, (downloadErr) => {
        if (downloadErr) {
          console.error(downloadErr);
        }

        fs.unlink(tempFilePath, (error) => {
          if (error) {
            console.error(error);
          }
        });
      });
    });
  } catch (error) {
    next(error);
  }
};

const submitInfor = (req, res, next) => {
  try {
    const data = req.body;
    console.log(data);
    res.render(`${data.fileName}`, data);
  } catch (error) {
    next(error);
  }
};

module.exports = {
  insertTmplt,
  getTmplt,
  deleteTmplt,
  submitInfor,
};

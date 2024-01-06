const { User, CV_tmplt } = require("../models");
const fs = require("fs");
const path = require("path");
const errorHandler = require("../utils/error");

const insertTmplt = async (req, res, next) => {
  try {
    if (req.body.fileName) {
      const fileName = req.body.fileName;
      var preview;
      if (req.file) preview = req.file.path;
      else preview = null;
      const [newCVtmplt, created] = await CV_tmplt.findOrCreate({
        where: { html_dir: fileName },
        defaults: {
          html_dir: fileName,
          preview_dir: preview,
        },
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
    if (deltmplt.preview_dir) {
      const originalFilePath = path.join(
        __dirname,
        "../../",
        `${deltmplt.preview_dir}`
      );
      fs.unlink(originalFilePath, async (err) => {
        if (err) console.error(err);
      });
    }
    deltmplt.destroy();
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

    res.send(fileRecord);
    // // Read the file from the file system, make a copy, and send it
    // const originalFilePath = path.join(
    //   __dirname,
    //   "../../",
    //   `${fileRecord.html_dir}`
    // ); // Adjust based on how you store the path
    // const tempFilePath = path.join(
    //   __dirname,
    //   "../../",
    //   `copy-${path.basename(fileRecord.html_dir)}`
    // ); // Create a temporary path to store the copy
    // console.log(originalFilePath, typeof originalFilePath);
    // console.log(tempFilePath, typeof tempFilePath);
    // fs.copyFile(originalFilePath, tempFilePath, (error) => {
    //   if (error) {
    //     errorHandler(500, "Could not process the file");
    //   }
    //   res.sendFile(tempFilePath, (downloadErr) => {
    //     if (downloadErr) {
    //       console.error(downloadErr);
    //     }

    //     fs.unlink(tempFilePath, (error) => {
    //       if (error) {
    //         console.error(error);
    //       }
    //     });
    //   });
    // });
  } catch (error) {
    next(error);
  }
};

const submitInfor = async (req, res, next) => {
  try {
    const findUser = await User.findByPk(req.user.id);
    if (!findUser) return res.status(404).json({ msg: "User not found" });
    const imageFilePath = path.join("../", findUser.profileImg_dir);
    const textData = req.body;

    const data = { ...textData, profileImg_dir: imageFilePath };
    console.log(data);
    res.render(`${data.fileName}`, data, (error, html) => {
      if (error) {
        next(error);
      } else {
        res.send(html);
      }
    });
  } catch (error) {
    next(error);
  }
};

const updateTmpltPreview = async (req, res, next) => {
  try {
    if (!req.file) return res.status(404).json({ msg: "File not found" });
    //get template id
    const id = req.query.id;
    console.log("Update CV preview ID: " + id);
    //find template with id
    const findtmplt = await CV_tmplt.findByPk(id);
    if (!findtmplt) return res.status(404).json({ msg: "Template not found" });
    //check if template already have preview
    if (findtmplt.preview_dir) {
      if (findtmplt.preview_dir == req.file.path)
        return res.status(409).json({ msg: "Preview Image Overwrited" });
      //delete old preview
      const originalFilePath = path.join(
        __dirname,
        "../../",
        `${findtmplt.preview_dir}`
      );
      fs.unlink(originalFilePath, async (err) => {
        if (err) console.error(err);
      });
    }
    //update preview directory in database
    findtmplt.preview_dir = req.file.path;
    await findtmplt.save();
    console.log("Update Preview successfully");
    return res.status(200).json({ msg: "Template preview updated" });
  } catch (err) {
    console.log(err);
    next(err);
  }
};

const getTmpltList = async (req, res, next) => {
  try {
    //get template id and preview directory from database
    const previewlist = await CV_tmplt.findAll({
      attributes: ["id", "preview_dir"],
    });
    var List = [];
    //convert preview image to base 64
    previewlist.forEach((preview) => {
      base64preview = fs.readFileSync(
        path.join(__dirname, "../../", preview.preview_dir),
        "base64"
      );
      List.push(new Object({ ID: preview.id, Base64: base64preview }));
    });
    //convert list to json and send.
    const listjson = JSON.stringify(List);
    return res.status(200).send(listjson);
  } catch (error) {
    next(error);
  }
};

module.exports = {
  insertTmplt,
  getTmplt,
  deleteTmplt,
  submitInfor,
  getTmpltList,
  updateTmpltPreview,
};

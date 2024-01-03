const multer = require("multer");
const { file } = require("pdfkit");
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    let destination = "defaults/";
    if (file.mimetype === "image/jpeg" || file.mimetype === "image/png") {
      destination = "Data/images/";
    } else if (file.mimetype === "text/html") {
      destination = "Data/Templates/";
    } else if (file.mimetype === "application/pdf") {
      destination = "Data/PDFs/";
    }
    cb(null, destination);
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  },
});

const fileFilter = (res, file, cb) => {
  if (
    file.mimetype === "image/jpeg" ||
    file.mimetype === "image/png" ||
    file.mimetype === "text/html" ||
    file.mimetype === "application/pdf"
  ) {
    cb(null, true);
  } else {
    cb(new Error("Invalid file type"));
  }
};
const CV_tmpltDTB = multer({ storage: storage, fileFilter: fileFilter });
module.exports = CV_tmpltDTB;

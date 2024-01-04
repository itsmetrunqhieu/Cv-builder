const multer = require("multer");
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "CV_tmpltDTB/");
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  },
});
const CV_tmpltDTB = multer({ storage: storage });
module.exports = CV_tmpltDTB;

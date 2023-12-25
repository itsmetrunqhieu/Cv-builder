const express = require(`express`);
const CV_tmplt = require("../middlewares/multerConfig");
const {
  insertTmplt,
  deleteTmplt,
} = require("../controllers/CVtmplt.controller");

const router = express.Router();

router.post("/save", CV_tmplt.single("file"), insertTmplt);
router.delete("/delete", deleteTmplt);

module.exports = router;

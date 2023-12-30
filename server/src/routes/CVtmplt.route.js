const express = require("express");
const CV_tmpltDTB = require("../middlewares/multerConfig");
const {
  getTmplt,
  insertTmplt,
  deleteTmplt,
  submitInfor,
} = require("../controllers/CVtmplt.controller");

const router = express.Router();

router.get("/get/:id", getTmplt);
router.post("/save", CV_tmpltDTB.single("file"), insertTmplt);
router.delete("/delete/:id", deleteTmplt);
router.post("/submitInfor", submitInfor);

module.exports = router;

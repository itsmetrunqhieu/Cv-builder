const express = require("express");
const CV_tmpltDTB = require("../middlewares/multerConfig");
const {
  getTmplt,
  insertTmplt,
  deleteTmplt,
} = require("../controllers/CVtmplt.controller");

const router = express.Router();

router.get("/get/:id", getTmplt);
router.post("/save", CV_tmpltDTB.single("file"), insertTmplt);
router.delete("/delete/:id", deleteTmplt);

module.exports = router;

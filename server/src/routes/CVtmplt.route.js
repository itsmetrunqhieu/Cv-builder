const express = require("express");
const CV_tmpltDTB = require("../middlewares/multerConfig");
const {
  insertTmplt,
  deleteTmplt,
} = require("../controllers/CVtmplt.controller");

const router = express.Router();

router.get("/get/:");
router.post("/save", CV_tmpltDTB.single("file"), insertTmplt);
router.delete("/delete", deleteTmplt);

module.exports = router;

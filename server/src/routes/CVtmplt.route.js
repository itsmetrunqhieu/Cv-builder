const express = require("express");
const CV_tmpltDTB = require("../middlewares/multerConfig");
const {
  getTmplt,
  insertTmplt,
  deleteTmplt,
  submitInfor,
  getTmpltList,
  updateTmpltPreview,
} = require("../controllers/CVtmplt.controller");
const { verifyToken } = require("../utils/verifyToken");

const router = express.Router();

router.get("/get/:id", getTmplt);
router.post("/save", CV_tmpltDTB.single("file"), insertTmplt);
router.delete("/delete/:id", deleteTmplt);
router.post("/submitInfor",verifyToken, submitInfor);
router.get("/list",getTmpltList);
router.put("/put/preview",CV_tmpltDTB.single("file"),updateTmpltPreview);

module.exports = router;

const express = require(`express`);
const { downloadPDF, saveUserCV, getUserCVList } = require("../controllers/CV.controller");
const { verifyToken } = require("../utils/verifyToken");
const { CV_tmpltDTB } = require("../middlewares/multerConfig");
const router = express.Router();

router.post("/download", verifyToken, CV_tmpltDTB.single("file"), downloadPDF);
router.post(
  "/saveUserCV/",
  verifyToken,
  CV_tmpltDTB.single("file"),
  saveUserCV
);
router.get("/getUserCVList", verifyToken, getUserCVList);

module.exports = router;

const express = require(`express`);
const { downloadPDF, saveUserCV } = require("../controllers/CV.controller");
const { verifyToken } = require("../utils/verifyToken");
const CV_tmpltDTB = require("../middlewares/multerConfig");
const router = express.Router();

router.post("/download", verifyToken, CV_tmpltDTB.single("file"), downloadPDF);
router.post("/saveUserCV/:fileName", verifyToken, saveUserCV);

module.exports = router;
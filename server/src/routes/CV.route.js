const express = require(`express`);
const { downloadPDF, saveUserCV } = require("../controllers/CV.controller");
const { verifyToken } = require("../utils/verifyToken");
const CV_tmpltDTB = require("../middlewares/multerConfig");
const router = express.Router();

router.post("/download", CV_tmpltDTB.single("file"), downloadPDF);
router.post("/saveUserCV/:fileName", saveUserCV);

module.exports = router;

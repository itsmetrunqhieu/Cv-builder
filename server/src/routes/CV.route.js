const express = require(`express`);
const { downloadPDF, saveUserCV } = require("../controllers/CV.controller");
const { verifyToken } = require("../utils/verifyToken");
const router = express.Router();

router.get("/download/:fileName", verifyToken, downloadPDF);
router.post("/saveUserCV/:fileName", verifyToken, saveUserCV);

module.exports = router;

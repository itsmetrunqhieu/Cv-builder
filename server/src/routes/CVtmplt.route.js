const express = require(`express`);
const inserttmplt = require("../controllers/CVtmplt.controller");

const router = express.Router();

router.put("/save", inserttmplt);

module.exports = router;

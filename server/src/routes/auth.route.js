const express = require("express");
const {
    signup,
    signin,
    forgotpassword,
    resetpassword,
} = require("../controllers/auth.controller");

const router = express.Router();

router.post("/signup", signup);
router.post("/signin", signin);
router.post("/forgotpassword", forgotpassword);
router.post("/resetpassword/:id/:token",resetpassword);

module.exports = router;

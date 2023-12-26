const express = require(`express`);
const {test} = require("../controllers/user.controller");

const router = express.Router();

router.get("/test", test);
router.post("/testpost", async (req, res) =>{
    console.log(req.body);
    res.send(req.body);
});

module.exports = router;

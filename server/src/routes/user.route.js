const express = require(`express`);
const {test, updateUser} = require("../controllers/user.controller");

const router = express.Router();

router.get("/test", test);
router.post("/testpost", async (req, res) =>{
    console.log(req.body);
    res.send(req.body);
});
router.patch("/patch",updateUser);

module.exports = router;

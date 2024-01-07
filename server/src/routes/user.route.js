const express = require(`express`);
const { test, updateUser, getUser } = require("../controllers/user.controller");
const { verifyToken } = require("../utils/verifyToken");
const { CV_tmpltDTB } = require("../middlewares/multerConfig");
const router = express.Router();

router.get("/test", test);

router.get("/getuser", verifyToken, getUser);

router.post("/testpost", async (req, res) => {
  console.log(req.body);
  res.send(req.body);
});

router.patch("/patch", verifyToken, updateUser);

module.exports = router;

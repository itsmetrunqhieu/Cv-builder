const express = require(`express`);
const { test, updateUser } = require("../controllers/user.controller");
const { verifyToken } = require("../utils/verifyToken");
const { CV_tmpltDTB } = require("../middlewares/multerConfig");
const router = express.Router();

router.get("/test", test);
router.post("/testpost", async (req, res) => {
  console.log(req.body);
  res.send(req.body);
});
router.patch("/patch", verifyToken, CV_tmpltDTB.single("file"), updateUser);

module.exports = router;

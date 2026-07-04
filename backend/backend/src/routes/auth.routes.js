const router = require("express").Router();
const c = require("../controllers/auth.controller");

router.post("/register", c.registerUser);
router.post("/login", c.loginUser);
router.post("/admin/login", c.loginAdmin);

router.post("/forgot/check", c.checkUserIdAndMobile);
router.post("/forgot/reset", c.resetPasswordByUserIdAndMobile);
router.post("/forgot/userid", c.findUserIdByMobile);

module.exports = router;

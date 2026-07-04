// const router = require("express").Router();
// const authJwt = require("../middleware/authJwt");
// const c = require("../controllers/complaint.controller");

// router.post("/", authJwt, c.createComplaint);
// router.get("/me", authJwt, c.getMyComplaints);

// module.exports = router;

const router = require("express").Router();
const authJwt = require("../middleware/authJwt");
const controller = require("../controllers/complaint.controller");

router.post("/", authJwt, controller.createComplaint);
router.get("/me", authJwt, controller.getMyComplaints);

module.exports = router;

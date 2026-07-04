// const router = require("express").Router();
// const authJwt = require("../middleware/authJwt");
// const c = require("../controllers/admin.controller");

// router.get("/complaints", authJwt, c.getAllComplaints);
// router.put("/complaints/:id/status", authJwt, c.updateComplaintStatus);

// module.exports = router;

const router = require("express").Router();
const authJwt = require("../middleware/authJwt");
const controller = require("../controllers/admin.controller");

router.get("/complaints", authJwt, controller.getAllComplaints);
router.put("/complaints/:id/status", authJwt, controller.updateComplaintStatus);

module.exports = router;

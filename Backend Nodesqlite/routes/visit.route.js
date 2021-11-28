const express = require("express");
const router = express.Router();
const visitController = require("../controller/visit.controller");

router.post("/", visitController.addStaff);
router.get("/", visitController.findStaffs);
router.get("/:id", visitController.findStaffById);
router.put("/:id", visitController.updateStaff);
router.delete("/:id", visitController.deleteById);

module.exports = router;

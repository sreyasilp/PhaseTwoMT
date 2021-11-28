const express = require("express");
const router = express.Router();
const staffController = require("../controller/staff.controller");

router.post("/", staffController.addStaff);
router.get("/", staffController.findStaffs);
router.get("/:id", staffController.findStaffById);
router.put("/:id", staffController.updateStaff);
router.delete("/:id", staffController.deleteById);

module.exports = router;

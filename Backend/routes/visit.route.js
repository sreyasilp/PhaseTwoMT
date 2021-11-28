const express = require("express");
const router = express.Router();
const visitController = require("../controller/visit.controller");

router.post("/", visitController.addVisit);
router.get("/", visitController.findVisits);
router.get("/:id", visitController.findVisitById);
router.put("/:id", visitController.updateVisit);
router.delete("/:id", visitController.deleteById);

module.exports = router;

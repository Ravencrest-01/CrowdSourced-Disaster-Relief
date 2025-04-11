const express = require("express");
const router = express.Router();
const donorController = require("../controllers/donorController");

router.post("/", donorController.createDonor);
router.get("/", donorController.getAllDonors);

module.exports = router;

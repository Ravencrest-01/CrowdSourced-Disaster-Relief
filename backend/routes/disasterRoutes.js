const express = require("express");
const router = express.Router();
const { createDisaster, getAllDisasters } = require("../controllers/disasterController");

// Route to get all disasters
router.get("/", getAllDisasters);

// Route to create a new disaster
router.post("/", createDisaster);

module.exports = router;

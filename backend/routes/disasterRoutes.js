const express = require("express");
const { createDisaster, getAllDisasters } = require("../controllers/disasterController");

const router = express.Router();

router.post("/", createDisaster);  // This handles POST /api/disasters
router.get("/", getAllDisasters);  // This handles GET /api/disasters

module.exports = router;

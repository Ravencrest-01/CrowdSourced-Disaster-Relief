const express = require('express');
const router = express.Router();
const { getShelters, createShelter } = require('../controllers/shelterController');

// @route   GET & POST /api/shelters
router.route('/').get(getShelters).post(createShelter);

module.exports = router;
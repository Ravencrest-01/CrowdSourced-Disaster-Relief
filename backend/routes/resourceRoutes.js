const express = require('express');
const router = express.Router();
const { getResources, createResource } = require('../controllers/resourceController');

// @route   GET & POST /api/resources
router.route('/').get(getResources).post(createResource);

module.exports = router;
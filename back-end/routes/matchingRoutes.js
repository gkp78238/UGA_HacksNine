// routes/matchingRoutes.js

const express = require('express');
const router = express.Router();
const matchingController = require('../controllers/matchingController');

// Route for matching caregivers with elderly individuals
router.get('/match', matchingController.matchCaregivers);

module.exports = router;

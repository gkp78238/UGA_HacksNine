// routes/caregiverRoutes.js

const express = require('express');
const router = express.Router();
const caregiverController = require('../controllers/caregiverController');

// Route for creating a new caregiver profile
router.post('/caregivers', caregiverController.createCaregiver);

// Route for updating caregiver profile
router.put('/caregivers/:id', caregiverController.updateCaregiver);

// Route for retrieving caregiver profile
router.get('/caregivers/:id', caregiverController.getCaregiverById);

// Route for deleting caregiver profile
router.delete('/caregivers/:id', caregiverController.deleteCaregiver);

module.exports = router;

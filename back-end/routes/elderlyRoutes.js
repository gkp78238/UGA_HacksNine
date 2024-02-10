// routes/elderlyRoutes.js

const express = require('express');
const router = express.Router();
const elderlyController = require('../controllers/elderlyController');

// Route for creating a new elderly profile
router.post('/elderly', elderlyController.createElderly);

// Route for updating elderly profile
router.put('/elderly/:id', elderlyController.updateElderly);

// Route for retrieving elderly profile
router.get('/elderly/:id', elderlyController.getElderlyById);

// Route for deleting elderly profile
router.delete('/elderly/:id', elderlyController.deleteElderly);

module.exports = router;

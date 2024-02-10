// routes/authRoutes.js

const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');

// Route for user registration
router.post('/api/register', authController.register);

// Route for user login
router.post('/login', authController.login);

// Route for user logout
router.get('/logout', authController.logout);

module.exports = router;

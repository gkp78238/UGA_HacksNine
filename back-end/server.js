require('dotenv').config(); // Load environment variables

// server.js
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

// Import routes
const authRoutes = require('./routes/authRoutes');
const caregiverRoutes = require('./routes/caregiverRoutes');
const elderlyRoutes = require('./routes/elderlyRoutes');
const matchingRoutes = require('./routes/matchingRoutes');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json()); // Parses incoming requests with JSON payloads

// Database connection
const dbURI = process.env.MONGODB_URI; // Ensure you have your MongoDB URI in an environment variable
mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to MongoDB'))
  .catch((error) => console.error('Error connecting to MongoDB:', error));

// Use routes
app.use('/api/auth', authRoutes);
app.use('/api/caregivers', caregiverRoutes);
app.use('/api/elderly', elderlyRoutes);
app.use('/api/matching', matchingRoutes);

// Listen on port
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));


require('dotenv').config(); // Load environment variables

const express = require('express');
const mongoose = require('mongoose'); // Correctly place mongoose import here
const cors = require('cors');

// Database connection
const dbURI = process.env.MONGODB_URI; // Define dbURI after loading environment variables
console.log(dbURI)
mongoose.connect(dbURI)
  .then(() => console.log('Connected to MongoDB'))
  .catch((error) => console.error('Error connecting to MongoDB:', error));

// Import routes
const authRoutes = require('./routes/authRoutes');
const caregiverRoutes = require('./routes/caregiverRoutes');
const elderlyRoutes = require('./routes/elderlyRoutes');
const matchingRoutes = require('./routes/matchingRoutes');

const app = express();
const PORT = process.env.PORT || 8000;

// Middleware
app.use(cors());
app.use(express.json()); // Parses incoming requests with JSON payloads

// Use routes
app.use('/api/auth', authRoutes);
app.use('/api/caregivers', caregiverRoutes);
app.use('/api/elderly', elderlyRoutes);
app.use('/api/matching', matchingRoutes);

// Listen on port
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

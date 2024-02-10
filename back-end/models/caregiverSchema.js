const mongoose = require('mongoose');

const caregiverSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  age: Number,
  gender: {
    type: String,
    required: true,
  },
  experienceYears: {
    type: Number,
    required: true,
  },
  specialties: [String],
  availableLocations: [String],
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  }
}, { timestamps: true });

module.exports = mongoose.model('Caregiver', caregiverSchema);

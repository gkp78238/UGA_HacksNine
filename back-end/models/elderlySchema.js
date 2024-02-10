const mongoose = require('mongoose');

const elderlySchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  age: {
    type: Number,
    required: true,
  },
  gender: String,
  medicalConditions: [String],
  interests: [String],
  livingSituation: String,
  requiredCare: [String],
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  }
}, { timestamps: true });

module.exports = mongoose.model('Elderly', elderlySchema);

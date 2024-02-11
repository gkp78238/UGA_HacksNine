require('dotenv').config(); 

const express = require('express');
const mongoose = require('mongoose'); 
const cors = require('cors');


const dbURI = process.env.MONGODB_URI;
console.log(dbURI)
mongoose.connect(dbURI)
  .then(() => console.log('Connected to MongoDB'))
  .catch((error) => console.error('Error connecting to MongoDB:', error));

const router = express.Router();
const authRoutes = require('./routes/authRoutes');
const caregiverRoutes = require('./routes/caregiverRoutes');
const elderlyRoutes = require('./routes/elderlyRoutes');
const matchingRoutes = require('./routes/matchingRoutes');
const chatController = require('./controllers/chatController');


router.post('/message', chatController.addMessageToConversation);

module.exports = router;


const app = express();
const PORT = process.env.PORT || 5003;
app.use(cors());
app.use(express.json()); 


app.use('/api/login', authRoutes);
app.use('/api/register', authRoutes);
app.use('/api/caregivers', caregiverRoutes);
app.use('/api/elderly', elderlyRoutes);
app.use('/api/matching', matchingRoutes);


app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

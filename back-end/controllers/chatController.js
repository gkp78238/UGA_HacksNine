// controllers/chatController.js 

const Conversation = require('../models/chatConvo'); // Function to add a message to a conversation 
exports.addMessageToConversation = async (req, res) => { 
    const { userId, text, sender } = req.body; 
    try { let conversation = await Conversation.findOne({ userId: userId }); 
    if (!conversation) { conversation = new Conversation({ userId }); 
} 
conversation.messages.push({ text, sender }); 
conversation.updatedAt = Date.now(); 
await conversation.save(); res.status(200).json(conversation); } 
catch (error) { console.error('Error saving message to conversation:', error); 
res.status(500).json({ message: 'Server Error' }); } };
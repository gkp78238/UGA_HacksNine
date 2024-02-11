const mongoose = require('mongoose');

// Define the schema for a chat conversation
const conversationSchema = new mongoose.Schema({
    userId: {
        type: String,
        required: true,
    },
    messages: [{
        text: {
            type: String,
            required: true,
        },
        sender: {
            type: String,
            required: true,
            enum: ['user', 'bot'], 
        },
        createdAt: {
            type: Date,
            default: Date.now, 
        }
    }],
    createdAt: {
        type: Date,
        default: Date.now,
    },
    updatedAt: {
        type: Date,
        default: Date.now,
    }
});

// Create a model from the schema
const Conversation = mongoose.model('Conversation', conversationSchema);

module.exports = Conversation;

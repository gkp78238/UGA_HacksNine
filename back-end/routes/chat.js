const express = require('express');
const router = express.Router();
const dialogflow = require('@google-cloud/dialogflow');
const sessionId = '587776829840';
const projectId = 'ultimate-bit-413920'; // Your Google Cloud project ID

// Initialize a Dialogflow session client
const sessionClient = new dialogflow.SessionsClient();

const sessionPath = sessionClient.projectAgentSessionPath(projectId, sessionId);

// POST endpoint for sending user messages to the chatbot
router.post('/message', async (req, res) => {
    const userMessage = req.body.message;

    // Prepare the request to Dialogflow
    const request = {
        session: sessionPath,
        queryInput: {
            text: {
                text: userMessage,
                languageCode: 'en-US',
            },
        },
    };

    try {
        // Send request to Dialogflow and wait for the response
        const responses = await sessionClient.detectIntent(request);
        const result = responses[0].queryResult;

        // Send the chatbot's response back to the client
        res.json({ message: result.fulfillmentText });
    } catch (error) {
        console.error(`ERROR: ${error.message}`);
        res.status(500).send('Unable to process the message');
    }
});

// Export the router
module.exports = router;

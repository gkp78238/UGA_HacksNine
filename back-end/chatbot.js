const dialogflow = require('@google-cloud/dialogflow');
const uuid = require('uuid');

class Chatbot {
    constructor(projectId) {
        this.projectId = projectId;
        this.sessionClient = new dialogflow.SessionsClient();
    }

    async sendMessage(sessionId, text) {
        const sessionPath = this.sessionClient.projectAgentSessionPath(this.projectId, sessionId);

        // The text query request.
        const request = {
            session: sessionPath,
            queryInput: {
                text: {
                    text: text,
                    languageCode: 'en-US',
                },
            },
        };

        try {
            const responses = await this.sessionClient.detectIntent(request);
            const result = responses[0].queryResult;
            return {
                text: result.fulfillmentText,
                intent: result.intent ? result.intent.displayName : null,
                confidence: result.intentDetectionConfidence,
            };
        } catch (err) {
            console.error('Dialogflow sendMessage error:', err);
            throw err;
        }
    }
}

// Example usage
// const chatbot = new Chatbot('your-google-cloud-project-id');
// const sessionId = uuid.v4(); // Generate a unique session ID for each user conversation
// chatbot.sendMessage(sessionId, 'Hello!').then(response => {
//     console.log('Detected intent:', response);
// }).catch(err => {
//     console.error('Error sending message:', err);
// });

module.exports = Chatbot;

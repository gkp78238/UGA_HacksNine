import axios from 'axios';

const sendMessageToServer = async (message) => {
    try {
        const response = await axios.post('/api/message', { message });
        return response.data; // Assuming the backend returns the chatbot's response
    } catch (error) {
        console.error('Error sending message to server:', error);
        throw error; // Rethrow or handle as necessary
    }
};

export { sendMessageToServer };

import axios from 'axios';

const sendMessageToServer = async (message) => {
    try {
        const response = await axios.post('/api/message', { message });
        return response.data; 
    } catch (error) {
        console.error('Error sending message to server:', error);
        throw error;
    }
};

export { sendMessageToServer };

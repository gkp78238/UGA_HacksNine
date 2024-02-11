import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './Chatbot.css';

function Chatbot() {
  const [userInput, setUserInput] = useState('');
  const [chatHistory, setChatHistory] = useState([]);
  const navigate = useNavigate();

  const sendMessageToApi = async () => {
    try {
      const response = await axios.post('API_ENDPOINT', { message: userInput });
      // Add the user message and API response to the chat history
      setChatHistory(chatHistory => [...chatHistory, { from: 'user', message: userInput }, { from: 'bot', message: response.data }]);
      // Clear the input after sending the message
      setUserInput('');
    } catch (error) {
      console.error('Error sending message to chatbot API:', error);
    }
  };

  const handleUserInput = (e) => {
    setUserInput(e.target.value);
  };

  const handleChatCompletion = () => {
    // Call this function when the chatbot interaction should lead to the CaretakerMatcher
    navigate('/match');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    sendMessageToApi();
  };

  return (
    <div className="chatbot-container">
      <div className="chat-history">
        {chatHistory.map((entry, index) => (
          <div key={index} className={`chat-message ${entry.from}`}>
            {entry.message}
          </div>
        ))}
      </div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={userInput}
          onChange={handleUserInput}
          placeholder="Type your message..."
        />
        <button type="submit">Send</button>
      </form>
    </div>
  );
}

export default Chatbot;

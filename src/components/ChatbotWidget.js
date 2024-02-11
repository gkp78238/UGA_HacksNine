import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './ChatbotWidget.css'; 

const ChatWidget = () => {
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState('');

  useEffect(() => {
    const fetchMessages = async () => {
      try {
        const response = await axios.get('/api/messages');
        setMessages(response.data);
      } catch (error) {
        console.error('Failed to fetch messages:', error);
      }
    };

    fetchMessages();
  }, []);


  const handleSendMessage = async (event) => {
    event.preventDefault();
    if (!newMessage.trim()) return;

    try {
      const response = await axios.post('/api/messages', { text: newMessage });
      setMessages([...messages, response.data]); 
      setNewMessage(''); 
    } catch (error) {
      console.error('Failed to send message:', error);
    }
  };

  return (
    <div className="chat-widget">
      <ul className="messages-list">
        {messages.map((message, index) => (
          <li key={index} className="message">
            {message.text}
          </li>
        ))}
      </ul>
      <form className="message-form" onSubmit={handleSendMessage}>
        <input
          type="text"
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
          placeholder="Type a message..."
          className="message-input"
        />
        <button type="submit" className="send-button">Send</button>
      </form>
    </div>
  );
};

export default ChatWidget;

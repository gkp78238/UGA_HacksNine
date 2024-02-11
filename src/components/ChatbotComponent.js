import React from 'react';
import Chatbot from 'react-chatbot-kit';
import 'react-chatbot-kit/build/main.css';

import ActionProvider from './ActionProvider';
import MessageParser from './MessageParser';
import config from './config';

function ChatbotComponent() {
  return (
    <div className="chatbot-container">
      <Chatbot
        config={config}
        actionProvider={ActionProvider}
        messageParser={MessageParser}
      />
    </div>
  );
}

export default ChatbotComponent;

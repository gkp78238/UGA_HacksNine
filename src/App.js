import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Content from './components/Content';
import MainSection from './components/MainSection';
import Footer from './components/Footer'; 
import Signup from './components/Signup';
import Login from './components/Login';
import Chatbot from './components/Chatbot';
import ChatbotWidget from './components/ChatbotWidget';
import Caretakers from './components/Caretakers';


function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/chatbot" element={<Chatbot />} /> 
          <Route path="/chatbotWidget" element={<ChatbotWidget />} />
          <Route path="/caretakers" element={<Caretakers />} />
          <Route path="/" element={
            <main className="content">
              <MainSection />
              <Content /> 
            </main>
          } />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;

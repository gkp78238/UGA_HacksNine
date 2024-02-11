import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import MainSection from './components/MainSection';
import Footer from './components/Footer';
import Content from './components/Content';
import Signup from './components/Signup';
import Login from './components/Login';
import Chatbot from './components/Chatbot';
import CaretakerMatcher from './components/CaretakersMatch'; 
import Book from './components/Book';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/chatbot" element={<Chatbot />} />
          <Route path="/match" element={<CaretakerMatcher />} />
          <Route path="/match" element={<CaretakerMatcher />} /> 
          <Route path="/book" element={<Book />} /> 

          <Route path="/" element={
          <main classname= "content">
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

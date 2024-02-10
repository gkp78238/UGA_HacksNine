import React from 'react';
import Navbar from './components/Navbar';
import MainSection from './components/MainSection';
import Footer from './components/Footer';
import Content from './components/Content'; // Make sure the path matches the location of your file

function App() {
    return (
        <div className="App">
            <Navbar />
            <main className="content">
                <Content /> {/* This is where the WhoWeAre component is used */}
                <MainSection />
            </main>
            <Footer />
        </div>
    );
}

export default App;


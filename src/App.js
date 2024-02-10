import React from 'react';
import Navbar from './components/Navbar';
import MainSection from './components/MainSection';
import Footer from './components/Footer';

function App() {
    return (
        <div className="App">
            <Navbar />
            <main className="content">
                <MainSection />
            </main>
            <Footer />
        </div>
    );
}

export default App;

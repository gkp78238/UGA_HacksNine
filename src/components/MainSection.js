import React from 'react';
import './MainSection.css';
import image1 from '../Images/HelpingElderly.jpeg'; // replace with actual path and filename
import image2 from '../Images/HelpingElderly2.jpeg'; // replace with actual path and filename
import image3 from '../Images/Nature.jpeg'; // replace with actual path and filename

const MainSection = () => {
    return (
        <div className="main-section">
            <h1>Get the Care You Deserve</h1>
            <p>Making Life Better</p>
            <div className="image-container">
                <img src={image1} alt="Featured" className="main-image" />
                <img src={image2} alt="Featured" className="side-image" />
                <img src={image3} alt="Featured" className="side-image" />
            </div>
        </div>
    );
}

export default MainSection;


import React from 'react';
import './Content.css';
import image1 from '../Images/BlackPPL.jpeg'; // replace with actual path and filename

const WhoWeAre = () => {
  return (
    <div className="container">
      <div className="image-section">
        {/* Image goes here - for the example, it's a placeholder */}
        {/* You would replace the src with the path to your image file */}
        <img src= {image1} alt="Helping old people" />
      </div>
      <div className="text-section">
        <h1>Who We Are</h1>
        <div className="content">
          <p>Superhero Care is an innovative Elderly Assistance Service based in Athens, Georgia. 
          We are dedicated to matching seniors with caretakers who share their personalities and beliefs. 
          Our services include home care and maintenance, personalized administrative and health care, 
          and educational resources to support seniors and caretakers. Founded in 2000, we are committed 
          to respecting your privacy and preferences while providing affordable solutions.</p>
          <button>Learn More</button>
        </div>
      </div>
    </div>
  );
}

export default WhoWeAre;

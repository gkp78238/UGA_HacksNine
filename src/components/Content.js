import React from 'react';
import './Content.css';
import image1 from '../Images/BlackPPL.jpeg';

const WhoWeAre = () => {
  return (
    <div className="container">
      <div className="image-section">
        <img src={image1} alt="Helping old people" />
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
      {/* Card section */}
      <div className="card-section">
        <div className="card">
          <h2>Bipasha Bipin</h2>
          <p>"Superhero Care matched me with the perfect caretaker who not only takes care of my needs but also brightens my day. I like to talk to them all day!"</p>
        </div>
        <div className="card">
          <h2>London Ho</h2>
          <p>"The team at Superhero Care goes above and beyond to make sure my mom is well taken care of. We couldn't be happier with their services. Cảm ơn!!"</p>
        </div>
        <div className="card">
          <h2>Meghan Dey</h2>
          <p>
"Superhero Care is a lifesaver! They provide excellent care and make me feel like I'm part of their family."</p>
        </div>
        <div className="card">
          <h2>Gokul Premkumar</h2>
          <p>"So glad I choose Superhero Care! Fits me with the perfect elder.</p>
        </div>
      </div>
    </div>
  );
}

export default WhoWeAre;

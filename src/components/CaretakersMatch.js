import React from 'react';
import { Link } from 'react-router-dom';
import './CaretakersMatch.css'; // Make sure you have the corresponding CSS file

const caretakers = [
  // Hardcoded caretaker data
  { name: 'Caretaker 1', image: 'path_to_image_1', description: 'Description 1' },
  { name: 'Caretaker 2', image: 'path_to_image_2', description: 'Description 2' },
  { name: 'Caretaker 3', image: 'path_to_image_3', description: 'Description 3' },
];

const CaretakersMatch = () => {
  return (
    <div className="caretakers-match">
      <div className="header">
        <h1>Match</h1>
        <Link to="/">Home</Link> {/* This will take you back to the homepage */}
      </div>
      <div className="caretaker-list">
        {caretakers.map((caretaker, index) => (
          <div key={index} className="caretaker-profile">
            <img src={caretaker.image} alt={caretaker.name} />
            <h3>{caretaker.name}</h3>
            <p>{caretaker.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CaretakersMatch;

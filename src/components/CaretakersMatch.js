import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './CaretakersMatch.css';

const caretakers = [
  {
    name: 'Jenny Cares',
    image: "https://www.rightathome.net/-/media/rahv2/careers/coty/2023/image-grid-480x550/rah-cgoy23-headshots-markiajenkins-480x550.jpg?h=550&w=480&la=en&hash=C482D1311121402BD6CF2C6752FFE93E", 
    description: 'With over 10 years of experience, Jenny specializes in providing compassionate and personalized care for seniors with mobility challenges. Known for a patient and understanding approach, they are skilled in creating engaging daily routines that enrich the lives of the elderly.'
  },
  {
    name: 'Bob Listens',
    image: "https://www.rightathome.net/-/media/rahv2/careers/coty/2023/image-grid-480x550/rah-cgoy23-headshots-anelmetellus-480x550.jpg?h=550&w=480&la=en&hash=D69D6A35D588DF105AE98C84C5A342D5", 
    description: 'Bob is a certified nursing assistant with a passion for elder care. They have a strong background in assisting with daily living activities and medication management. Their warm and friendly demeanor makes them a favorite among clients, providing not just care but companionship.'
  },
  {
    name: 'Kindness Jones',
    image: "https://www.rightathome.net/-/media/rahv2/careers/coty/2023/image-grid-480x550/rah-cgoy23-headshots-vickibailiff480x550.jpg?h=550&w=480&la=en&hash=A4985CD9F66977398143A2F678B22122",
    description: 'Bringing a creative and dynamic approach to caregiving, Kindness excels in incorporating physical and mental stimulation into the daily routines of their clients. With a focus on dementia care, they are adept at handling the unique challenges faced by seniors with cognitive impairments.'
  }
];
const CaretakersMatch = () => {
  const navigate = useNavigate();

  const navigateToBook = () => {
    navigate('/book'); 
  };

  return (
    <div className="caretakers-match">
      <div className="header">
        <h1>Match</h1>
        <Link to="/">Home</Link>
      </div>
      <div className="caretaker-list">
        {caretakers.map((caretaker, index) => (
          <div key={index} className="caretaker-profile">
            <img src={caretaker.image} alt={caretaker.name} />
            <h3>{caretaker.name}</h3>
            <p>{caretaker.description}</p>
            <button className="book-button" onClick={navigateToBook}>Book</button> 
          </div>
        ))}
      </div>
    </div>
  );
};

export default CaretakersMatch;

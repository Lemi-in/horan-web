// About.jsx
import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import './About.css';
import aboutImage from '../assets/home.jpg';
import Navbar from './Navbar';

const About = ({ toggleShop }) => {
  return (
    <div className="about-container">
      <div className="about-content">
        <h1 className="header">About Us</h1>
        <p className="text">
          Welcome to our Horan Collection, your ultimate destination for all things fashion and lifestyle! At [Website Name], we are passionate about providing you with a curated selection of the latest trends in clothing, accessories, and more, all designed to elevate your personal style and enhance your everyday life. Whether you're searching for the perfect outfit for a special occasion, seeking inspiration to refresh your wardrobe, or simply exploring the latest fashion must-haves, our platform offers a seamless shopping experience tailored to your needs. With a focus on quality, diversity, and accessibility, we strive to empower individuals to express their unique identities through fashion, while also fostering a vibrant community where creativity thrives. Join us on this exciting journey as we redefine the way you shop and engage with fashion in the digital age. Welcome to Horan Collection, where style meets innovation!
        </p>
      </div>
      <div className="about-image-container">
        {/* Wrap the image with Link and set its 'to' prop to the home page */}
        <Link to="/" className="about-image-link">
          <img src={aboutImage} alt="About Us" className="about-image" />
        </Link>
      </div>
    </div>
  );
};

export default About;

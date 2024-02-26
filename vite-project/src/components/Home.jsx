// Home.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css'; 
import homeImage from '../assets/home.jpg';

import Categories from './Categories'; // Import Categories component
import Footer from './Footer';
import LatestArrivals from './LatestArrivals';
import OtherProducts from './OtherProducts';

const Home = () => {
  return (
    <div className="home-container">
      <img src={homeImage} alt="Home" className="home-image" />
      <h1 className='image-text'>Horan Collection</h1>

      {/* Clickable text for "About Us" */}
      <Link to="/about" className="about-link">
        <p className="about-us-text">About Us</p>
      </Link>

      {/* Display Categories component */}
      <Categories /> 
      <h1 className='latest-title'>Our Latest Arrivals</h1>
      <Link to="/collections" className="explore-now-button-link">
        <button className="explore-now-button">Explore More</button>
      </Link>
      <LatestArrivals/>
      <h1 className='other-product'>Other Products</h1>
      <Link to="/collection" className="explore-now-button-link">
        <button className="explore-now-button">Explore More</button>
      </Link> <br />
      <OtherProducts/>
    </div>
  );
};

export default Home;

// LatestArrivals.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import './LatestArrivals.css';

// Import images
import latest3Image from '../ecommerce_assets/latest/latest3.jpg';
import latest11Image from '../ecommerce_assets/latest/latest11.jpg';
import latest6Image from '../ecommerce_assets/latest/latest6.jpg';

const LatestArrivals = () => {
  return (
    <div className="latest-arrivals-container">

      <div className="latest-arrivals-images">
        
        <Link to="/collections" className="latest-arrival-link">
          <div className="latest-arrival-image-container">
            <img src={latest3Image} alt="Latest Arrival" className="latest-arrival-image1" />
            <div className="explore-more-text">Explore more...</div>
          </div>
        </Link>
        <Link to="/collections" className="latest-arrival-link">
          <div className="latest-arrival-image-container">
            <img src={latest11Image} alt="Latest Arrival" className="latest-arrival-image2" />
            <div className="explore-more-text">Explore more...</div>
          </div>
        </Link>
        <Link to="/collections" className="latest-arrival-link">
          <div className="latest-arrival-image-container">
            <img src={latest6Image} alt="Latest Arrival" className="latest-arrival-image-explore-more" />
            <div className="explore-more-text">Explore more...</div>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default LatestArrivals;
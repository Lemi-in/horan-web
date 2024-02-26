
import React from 'react';
import { Link } from 'react-router-dom';
import './OtherProducts.css';

// Import images
import other5Image from '../ecommerce_assets/other/other5.jpg';
import other2Image from '../ecommerce_assets/other/other2.jpg';
import other4Image from '../ecommerce_assets/other/other4.jpg';

const OtherProducts = () => {
  return (
    <div className="other-products-container">
      <div className="other-products-images">
        <Link to="/collection" className="other-product-link">
          <img src={other5Image} alt="Other Product" className="other-product-image1" />
          <div className="explore-more-text">Explore more...</div>
        </Link>
        <Link to="/collection" className="other-product-link">
          <img src={other2Image} alt="Other Product" className="other-product-image2" />
          <div className="explore-more-text">Explore more...</div>
        </Link>
        <Link to="/collection" className="other-product-link">
          <img src={other4Image} alt="Other Product" className="other-product-image3" />
          <div className="explore-more-text">Explore more...</div>
        </Link>
      </div>
    </div>
  );
};

export default OtherProducts;
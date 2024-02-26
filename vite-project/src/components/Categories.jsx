// Categories.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import './Categories.css';

// Import images
import pantsImage from '../ecommerce_assets/collections/pants.jpg';
import shirtsImage from '../ecommerce_assets/collections/shirts.jpg';
import shoesImage from '../ecommerce_assets/collections/shoes.jpg';

const Categories = () => {
  return (
    <div className="categories-container">
      <h1 className="categories-title">Our Categories</h1>
      <div className="category-buttons">
      <Link to="/pants" className="category-link">
        <button className="pants-but">Pants</button>
      </Link>
      <Link to="/shirts" className="category-link">
        <button className="shirts-but">Shirts</button>
      </Link>
      <Link to="/shoes" className="category-link">
        <button className="shoes-but">Shoes</button>
      </Link> 
    </div> <br />
      <div className="category-links">
        <Link to="/pants" className="category-link" aria-label="Pants">
          <img src={pantsImage} alt="Pants" className="category-image-pants" />
          <div className="category-name">Pants</div>
        </Link>
        <Link to="/shirts" className="category-link" aria-label="Shirts">
          <img src={shirtsImage} alt="Shirts" className="category-image-shirts" />
          <div className="category-name">Shirts</div>
        </Link>
        <Link to="/shoes" className="category-link" aria-label="Shoes">
          <img src={shoesImage} alt="Shoes" className="category-image-shoes" />
          <div className="category-name">Shoes</div>
        </Link>
      </div>
    </div>
  );
};

export default Categories;

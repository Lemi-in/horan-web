import React from 'react';
import { Link } from 'react-router-dom';
import './Shop.css'; // Import CSS file for styling
import Pants from './Pants';
import Shirts from './Shirts';
import Shoes from './Shoes';

import Collection from './Collection';
import Collections from './Collections';

function Shop({ addToCart }) {
  return (
    <div className="shop-container">
      <h2 className='shoph'>All Items</h2>
      <div className="category-section">
        <h2 className='shoph1'>Pants</h2>
        <Pants addToCart={addToCart} />
      </div>
      <div className="category-section">
        <h2 className='shoph'>Shirts</h2>
        <Shirts addToCart={addToCart} />
      </div>
      <div className="category-section">
        <h2 className='shoph'>Shoes</h2>
        <Shoes addToCart={addToCart} />
      </div>
      <div className="latest-section">
        <h2 className='shoph'>Latest</h2>
        <Collections addToCart={addToCart} />
      </div>
      <div className="other-section">
        <h2 className='shoph'>Other</h2>
        <Collection addToCart={addToCart} />
      </div>
      <Link to="/cart">
        <button className='shop-but' id="view-cart-button">View Cart</button>
      </Link>
    </div>
  );
}

export default Shop;
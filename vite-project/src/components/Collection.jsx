

import React, { useState } from 'react';


// Import images
import other1Image from '../ecommerce_assets/other/other1.jpg';
import other2Image from '../ecommerce_assets/other/other2.jpg';
import other3Image from '../ecommerce_assets/other/other3.jpg';
import other4Image from '../ecommerce_assets/other/other4.jpg';
import other5Image from '../ecommerce_assets/other/other5.jpg';
import other6Image from '../ecommerce_assets/other/other6.jpg';
import other7Image from '../ecommerce_assets/other/other7.jpg';
import other8Image from '../ecommerce_assets/other/other8.jpg';
import other9Image from '../ecommerce_assets/other/other9.jpg';
import './Collection.css';

const Collection = ({ addToCart }) => {
  const [otherItems, setOtherItems] = useState([
    { id: 1, image: other1Image, price: 25, size: 'S', quantity: 1 },
    { id: 2, image: other2Image, price: 30, size: 'M', quantity: 1 },
    { id: 3, image: other3Image, price: 35, size: 'L', quantity: 1 },
    { id: 4, image: other4Image, price: 25, size: 'S', quantity: 1 },
    { id: 5, image: other5Image, price: 30, size: 'M', quantity: 1 },
    { id: 6, image: other6Image, price: 35, size: 'L', quantity: 1 },
    { id: 7, image: other7Image, price: 25, size: 'S', quantity: 1 },
    { id: 8, image: other8Image, price: 30, size: 'M', quantity: 1 },
    { id: 9, image: other9Image, price: 35, size: 'L', quantity: 1 },
    // Add other items
  ]);

  const handleQuantityChange = (id, action) => {
    setOtherItems(otherItems.map(item => {
      if (item.id === id) {
        if (action === 'increment') {
          return { ...item, quantity: item.quantity + 1 };
        } else if (action === 'decrement' && item.quantity > 1) {
          return { ...item, quantity: item.quantity - 1 };
        }
      }
      return item;
    }));
  };

  const handleAddToCart = (item) => {
    addToCart(item, item.quantity);
  };

  return (
    <div className="other-collection-container">
      {otherItems.map(item => (
        <div key={item.id} className="other-item">
          <img src={item.image} alt={`Other Item ${item.id}`} />
          <div className="other-details">
            <p>Price: ${item.price}</p>
            <p>Size: {item.size}</p>
            <div className="quantity-control">
              <button onClick={() => handleQuantityChange(item.id, 'decrement')}>-</button>
              <span>{item.quantity}</span>
              <button onClick={() => handleQuantityChange(item.id, 'increment')}>+</button>
            </div>
            <button className='addto' onClick={() => handleAddToCart(item, item.quantity)}>Add to Cart</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Collection;

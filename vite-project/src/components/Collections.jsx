// Collections.jsx
import React, { useState } from 'react';
import './Collections.css'; // Import the CSS file

// Import images
import latest1Image from '../ecommerce_assets/latest/latest1.jpg';
import latest2Image from '../ecommerce_assets/latest/latest2.jpg';
import latest3Image from '../ecommerce_assets/latest/latest3.jpg';
import latest4Image from '../ecommerce_assets/latest/latest4.jpg';
import latest5Image from '../ecommerce_assets/latest/latest5.jpg';
import latest6Image from '../ecommerce_assets/latest/latest6.jpg';
import latest7Image from '../ecommerce_assets/latest/latest7.jpg';
import latest8Image from '../ecommerce_assets/latest/latest8.jpg';
import latest9Image from '../ecommerce_assets/latest/latest9.jpg';
import latest10Image from '../ecommerce_assets/latest/latest10.jpg';
import latest11Image from '../ecommerce_assets/latest/latest11.jpg';
import latest12Image from '../ecommerce_assets/latest/latest12.jpg';

const Collections = ({ addToCart }) => {
  const [latestItems, setLatestItems] = useState([
    { id: 1, image: latest1Image, price: 30, size: 'S', quantity: 1 },
    { id: 2, image: latest2Image, price: 35, size: 'M', quantity: 1 },
    { id: 3, image: latest3Image, price: 40, size: 'L', quantity: 1 },
    { id: 4, image: latest4Image, price: 30, size: 'S', quantity: 1 },
    { id: 5, image: latest5Image, price: 35, size: 'M', quantity: 1 },
    { id: 6, image: latest6Image, price: 40, size: 'L', quantity: 1 },
    { id: 7, image: latest7Image, price: 30, size: 'S', quantity: 1 },
    { id: 8, image: latest8Image, price: 35, size: 'M', quantity: 1 },
    { id: 9, image: latest9Image, price: 40, size: 'L', quantity: 1 },
    { id: 10, image: latest10Image, price: 30, size: 'S', quantity: 1 },
    { id: 11, image: latest11Image, price: 35, size: 'M', quantity: 1 },
    { id: 12, image: latest12Image, price: 40, size: 'L', quantity: 1 },
    // Add other latest items
  ]);

  const handleQuantityChange = (id, action) => {
    setLatestItems(latestItems.map(item => {
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
    <div className="latest-collection-container">
  
      {latestItems.map(item => (
        <div key={item.id} className="latest-item">
          <img src={item.image} alt={`Latest Item ${item.id}`} />
          <div className="latest-details">
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

export default Collections;

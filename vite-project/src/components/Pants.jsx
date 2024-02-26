import React, { useState } from 'react';
import './Pants.css';
import pant1 from '../ecommerce_assets/pants/pant1.jpg';
import pant2 from '../ecommerce_assets/pants/pant2.jpg';
import pant3 from '../ecommerce_assets/pants/pant3.jpg';
import pant4 from '../ecommerce_assets/pants/pant4.jpg';
import pant5 from '../ecommerce_assets/pants/pant5.jpg';
import pant6 from '../ecommerce_assets/pants/pant6.jpg';
import pant7 from '../ecommerce_assets/pants/pant7.jpg';
import pant8 from '../ecommerce_assets/pants/pant8.jpg';
import pant9 from '../ecommerce_assets/pants/pant9.jpg';

const Pants = ({ addToCart }) => {
  const [pants, setPants] = useState([
    { id: 1, image: pant1, price: 20, size: 'S', quantity: 1 },
    { id: 2, image: pant2, price: 25, size: 'M', quantity: 1 },
    { id: 3, image: pant3, price: 27, size: 'L', quantity: 1 },
    { id: 4, image: pant4, price: 20, size: 'S', quantity: 1 },
    { id: 5, image: pant5, price: 25, size: 'M', quantity: 1 },
    { id: 6, image: pant6, price: 27, size: 'L', quantity: 1 },
    { id: 7, image: pant7, price: 20, size: 'S', quantity: 1 },
    { id: 8, image: pant8, price: 25, size: 'M', quantity: 1 },
    { id: 9, image: pant9, price: 27, size: 'L', quantity: 1 },
    // Add other pants data
  ]);

  const handleQuantityChange = (id, action) => {
    setPants(pants.map(pant => {
      if (pant.id === id) {
        if (action === 'increment') {
          return { ...pant, quantity: pant.quantity + 1 };
        } else if (action === 'decrement' && pant.quantity > 1) {
          return { ...pant, quantity: pant.quantity - 1 };
        }
      }
      return pant;
    }));
  };

  const handleAddToCart = (item, quantity) => {
    addToCart(item, quantity);
  };

  return (
    <div className="pants-container">
      {pants.map(pant => (
        <div key={pant.id} className="pant-item">
          <img src={pant.image} alt={`Pant ${pant.id}`} />
          <div className="pant-details">
            <p>Price: ${pant.price}</p>
            <p>Size: {pant.size}</p>
            <div className="quantity-control">
              <button onClick={() => handleQuantityChange(pant.id, 'decrement')}>-</button>
              <span>{pant.quantity}</span>
              <button onClick={() => handleQuantityChange(pant.id, 'increment')}>+</button>
            </div>
            <button className='addto' onClick={() => handleAddToCart(pant, pant.quantity)}>Add to Cart</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Pants;

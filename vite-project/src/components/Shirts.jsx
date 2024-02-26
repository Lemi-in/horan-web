import React, { useState } from 'react';
import './Shirts.css'; // Import the CSS file
import shirt1 from '../ecommerce_assets/shirts/shirt1.jpg';
import shirt2 from '../ecommerce_assets/shirts/shirt2.jpg';
import shirt3 from '../ecommerce_assets/shirts/shirt3.jpg';
import shirt4 from '../ecommerce_assets/shirts/shirt4.jpg';
import shirt5 from '../ecommerce_assets/shirts/shirt5.jpg';
import shirt6 from '../ecommerce_assets/shirts/shirt6.jpg';
import shirt7 from '../ecommerce_assets/shirts/shirt7.jpg';
import shirt8 from '../ecommerce_assets/shirts/shirt8.jpg';
import shirt9 from '../ecommerce_assets/shirts/shirt9.jpg';

const Shirts = ({ addToCart }) => {
  const [shirts, setShirts] = useState([
    { id: 1, image: shirt1, price: 25, size: 'S', quantity: 1 },
    { id: 2, image: shirt2, price: 30, size: 'M', quantity: 1 },
    { id: 3, image: shirt3, price: 35, size: 'L', quantity: 1 },
    { id: 4, image: shirt4, price: 25, size: 'S', quantity: 1 },
    { id: 5, image: shirt5, price: 30, size: 'M', quantity: 1 },
    { id: 6, image: shirt6, price: 35, size: 'L', quantity: 1 },
    { id: 7, image: shirt7, price: 25, size: 'S', quantity: 1 },
    { id: 8, image: shirt8, price: 30, size: 'M', quantity: 1 },
    { id: 9, image: shirt9, price: 35, size: 'L', quantity: 1 },
  ]);

  const handleQuantityChange = (id, action) => {
    setShirts(shirts.map(shirt => {
      if (shirt.id === id) {
        if (action === 'increment') {
          return { ...shirt, quantity: shirt.quantity + 1 };
        } else if (action === 'decrement' && shirt.quantity > 1) {
          return { ...shirt, quantity: shirt.quantity - 1 };
        }
      }
      return shirt;
    }));
  };

  const handleAddToCart = (item) => {
    addToCart(item, item.quantity);
  };

  return (
    <div className="shirts-container">
      {shirts.map(shirt => (
        <div key={shirt.id} className="shirt-item">
          <img src={shirt.image} alt={`Shirt ${shirt.id}`} />
          <div className="shirt-details">
            <p>Price: ${shirt.price}</p>
            <p>Size: {shirt.size}</p>
            <div className="quantity-control">
              <button onClick={() => handleQuantityChange(shirt.id, 'decrement')}>-</button>
              <span>{shirt.quantity}</span>
              <button onClick={() => handleQuantityChange(shirt.id, 'increment')}>+</button>
            </div>
            <button className='addto' onClick={() => handleAddToCart(shirt, shirt.quantity)}>Add to Cart</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Shirts;

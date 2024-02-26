// Shoes.jsx
import React, { useState } from 'react';
import './Shoes.css';
import shoe1 from '../ecommerce_assets/shoes/shoe1.jpg';
import shoe2 from '../ecommerce_assets/shoes/shoe2.jpg';
import shoe3 from '../ecommerce_assets/shoes/shoe3.jpg';
import shoe4 from '../ecommerce_assets/shoes/shoe4.jpg';
import shoe5 from '../ecommerce_assets/shoes/shoe5.jpg';
import shoe6 from '../ecommerce_assets/shoes/shoe6.jpg';
import shoe7 from '../ecommerce_assets/shoes/shoe7.jpg';
import shoe8 from '../ecommerce_assets/shoes/shoe8.jpg';
import shoe9 from '../ecommerce_assets/shoes/shoe9.jpg';

const Shoes = ({ addToCart }) => {
  const [shoes, setShoes] = useState([
    { id: 1, image: shoe1, price: 50, size: '8', quantity: 1 },
    { id: 2, image: shoe2, price: 60, size: '9', quantity: 1 },
    { id: 3, image: shoe3, price: 57, size: '9', quantity: 1 },
    { id: 4, image: shoe4, price: 50, size: '8', quantity: 1 },
    { id: 5, image: shoe5, price: 60, size: '9', quantity: 1 },
    { id: 6, image: shoe6, price: 57, size: '9', quantity: 1 },
    { id: 7, image: shoe7, price: 50, size: '8', quantity: 1 },
    { id: 8, image: shoe8, price: 60, size: '9', quantity: 1 },
    { id: 9, image: shoe9, price: 57, size: '9', quantity: 1 },
    // Add other shoe data
  ]);

  const handleQuantityChange = (id, action) => {
    setShoes(shoes.map(shoe => {
      if (shoe.id === id) {
        if (action === 'increment') {
          return { ...shoe, quantity: shoe.quantity + 1 };
        } else if (action === 'decrement' && shoe.quantity > 1) {
          return { ...shoe, quantity: shoe.quantity - 1 };
        }
      }
      return shoe;
    }));
  };

  const handleAddToCart = (item) => {
    addToCart(item, item.quantity);
  };

  return (
    <div className="shoes-container">
      {shoes.map(shoe => (
        <div key={shoe.id} className="shoe-item">
          <img src={shoe.image} alt={`Shoe ${shoe.id}`} />
          <div className="shoe-details">
            <p>Price: ${shoe.price}</p>
            <p>Size: {shoe.size}</p>
            <div className="quantity-control">
              <button onClick={() => handleQuantityChange(shoe.id, 'decrement')}>-</button>
              <span>{shoe.quantity}</span>
              <button onClick={() => handleQuantityChange(shoe.id, 'increment')}>+</button>
            </div>
            <button className="addto" onClick={() => handleAddToCart(shoe, shoe.quantity)}>Add to Cart</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Shoes;

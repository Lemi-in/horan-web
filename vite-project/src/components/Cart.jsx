import React from 'react';
import './Cart.css';
import { Link } from 'react-router-dom';

const Cart = ({ cartItems, removeFromCart }) => {
  const getTotalPrice = () => {
    let totalPrice = 0;
    cartItems.forEach(item => {
      totalPrice += item.price * item.quantity;
    });
    return totalPrice;
  };

  const getTotalQuantity = () => {
    let totalQuantity = 0;
    cartItems.forEach(item => {
      totalQuantity += item.quantity;
    });
    return totalQuantity;
  };

  return (
    <div className="cart-container">
      <h2 className='cart-title'>Shopping Cart</h2>
      <div className="cart-items">
        {cartItems.map(item => (
          <div key={item.id} className="cart-item">
            <img src={item.image} alt={item.name} className="cart-item-image" />
            <div className="cart-item-details">
              <h3>{item.name}</h3>
              <p>Price: ${item.price}</p>
              <p>Size: {item.size}</p>
              <p>Quantity: {item.quantity}</p>
              <button className='remove-button' onClick={() => removeFromCart(item.id)}>Remove</button>
            </div>
          </div>
        ))}
      </div>
      <div className="cart-summary">
        <p>Total Items: {getTotalQuantity()}</p>
        <p>Total Price: ${getTotalPrice()}</p>
        <Link to="/cart-final">
          <button className='checkout-button'>Buy</button>
        </Link>
      </div>
    </div>
  );
};

export default Cart;

// CartFinal.jsx
import React from 'react';
import './CartFinal.css'; // Import CSS file for styling

const CartFinal = ({ cartItems }) => {
  const calculateTotal = () => {
    let total = 0;
    cartItems.forEach(item => {
      total += item.price * item.quantity;
    });
    return total;
  };

  const totalItems = cartItems.reduce((total, item) => total + item.quantity, 0);

  return (
    <div className="cart-final-container">
      <h2>Order Summary</h2>
      <ul>
        {cartItems.map(item => (
          <li key={item.id}>
            <h3>{item.name}</h3>
            <h4 className='trun'>Price: ${item.price}</h4>
            <h4 className='trun'>Size: {item.size}</h4>
            <h4 className='trun'>Quantity: {item.quantity}</h4>
          </li>
        ))}
      </ul>
      <h4 className='trun'>Total: ${calculateTotal()}</h4>
      <h3 className='su'>You have successfully bought {totalItems} items for ${calculateTotal()}.</h3>
      <h3 className='su1'>Thank you for your purchase!</h3>
    </div>
  );
};

export default CartFinal;

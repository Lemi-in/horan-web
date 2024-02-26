// App.jsx
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Categories from './components/Categories';
import Footer from './components/Footer';
import Home from './components/Home';
import About from './components/About'; // Import the About component
import Pants from './components/Pants';
import Shirts from './components/Shirts';
import Shoes from './components/Shoes';
import Shop from './components/Shop';
import Cart from './components/Cart';
import LatestArrivals from './components/LatestArrivals';
import Collections from './components/Collections';
import OtherProducts from './components/OtherProducts';
import Collection from './components/Collection';
import CartFinal from './components/CartFinal';
import './App.css';

function App() {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (item, quantity) => {
    const existItem = cartItems.find(x => x.id === item.id);
    if (existItem) {
      setCartItems(cartItems.map(x =>
        x.id === item.id ? { ...existItem, quantity: existItem.quantity + quantity } : x
      ));
    } else {
      setCartItems([...cartItems, { ...item, quantity }]);
    }
  };

  const removeFromCart = (itemId) => {
    const updatedCartItems = cartItems.filter(x => x.id !== itemId);
    setCartItems(updatedCartItems);
  };

  return (
    <Router>
      <div>
        <Navbar />
        
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} /> {/* Add route for the About page */}
          <Route path="/pants" element={<Pants addToCart={addToCart} />} />
          <Route path="/shirts" element={<Shirts addToCart={addToCart}/>} />
          <Route path="/shoes" element={<Shoes addToCart={addToCart}/>} />
          <Route path="/shop" element={<Shop addToCart={addToCart}/>} />
          <Route path="/cart" element={<Cart cartItems={cartItems} removeFromCart={removeFromCart} />} />
          <Route path="/latest-arrivals" element={<LatestArrivals addToCart={addToCart}/>} />
          <Route path="/collections" element={<Collections addToCart={addToCart} />} />
          <Route path="/other-products" element={<OtherProducts addToCart={addToCart}/>} />
          <Route path="/collection" element={<Collection addToCart={addToCart} />} />
          <Route path="/cart-final" element={<CartFinal cartItems={cartItems} />} />
        </Routes>
        
        <Footer />
      </div>
    </Router>
  );
}

export default App;

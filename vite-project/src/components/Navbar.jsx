import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const [searchQuery, setSearchQuery] = useState('');
  
  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const filteredLinks = [
    { to: '/', label: 'Home' },
    { to: '/shop', label: 'Shop' },
    { to: '/about', label: 'About' },
    { to: '/cart', label: 'Cart' }
  ].filter(link => link.label.toLowerCase().includes(searchQuery.toLowerCase()));

  return (
    <div className="navbar">
      <div className="nav-links">
        {filteredLinks.map((link, index) => (
          <div className="dropdown" key={index}>
            <Link to={link.to} className="dropbtn">{link.label}</Link>
          </div>
        ))}
      </div>
      <div className="search-container">
        <input 
          type="text" 
          placeholder="Search..." 
          value={searchQuery} 
          onChange={handleSearchChange} 
        />
        <button type="submit"><i className="fa fa-search"></i></button>
      </div>
    </div>
  );
};

export default Navbar;

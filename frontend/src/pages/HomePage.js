import React from 'react';
import { Link } from 'react-router-dom';
import './HomePage.css'; // We will create this CSS file next

const HomePage = () => {
  return (
    <div className="hero-section">
      <div className="hero-overlay"></div>
      <div className="hero-content">
        <h1>Welcome to Chicken Candy</h1>
        <p>Your one-stop shop for the most delicious fast food in town. Freshly prepared, just for you.</p>
        <div className="hero-buttons">
          <Link to="/menu" className="btn btn-primary">View Our Menu</Link>
          <Link to="/register" className="btn btn-secondary">Order Now</Link>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
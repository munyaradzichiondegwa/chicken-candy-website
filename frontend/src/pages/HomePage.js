import React from 'react';
import { Link } from 'react-router-dom';
import heroBackgroundImage from '../assets/images/hero-background.jpg';

const HomePage = () => {
  return (
    <div 
      className="hero-section" 
      style={{ backgroundImage: `url(${heroBackgroundImage})` }}
    >
      <div className="hero-overlay"></div>
      <div className="hero-content">
        <h1>Welcome to Chicken Candy</h1>
        <p>Delightful Delicious, A taste sensation like no other!!!</p>
        <div className="hero-buttons">
          <Link to="/menu" className="btn btn-primary">View Our Menu</Link>
          <Link to="/register" className="btn btn-secondary">Order Now</Link>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
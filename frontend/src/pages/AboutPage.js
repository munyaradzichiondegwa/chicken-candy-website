import React from 'react';
import './AboutPage.css'; // We will create this file next

const AboutPage = () => {
  return (
    <div className="about-container">
      <div className="about-header">
        <h1>About Chicken Candy</h1>
        <p>Taste the difference, feel the love.</p>
      </div>
      <div className="about-content">
        <h2>Our Story</h2>
        <p>
          Chicken Candy was born from a simple yet powerful idea: to serve delicious, high-quality fast food that brings people together. We started in a small kitchen with a secret family recipe for fried chicken, and a dream to share our passion for food with the community.
        </p>
        <h2>Our Mission</h2>
        <p>
          Our mission is to provide an exceptional dining experience by using only the freshest ingredients, preparing every meal with care, and serving our customers with a smile. We believe that good food shouldn't be complicated, it should just be good. From our juicy burgers to our signature shawarma, every item on our menu is a testament to our commitment to quality.
        </p>
        <h2>Why Choose Us?</h2>
        <ul>
          <li><strong>Fresh Ingredients:</strong> We source our ingredients locally to ensure freshness and support our community.</li>
          <li><strong>Made to Order:</strong> Your food is prepared the moment you order it, guaranteeing it's hot and fresh every time.</li>
          <li><strong>Friendly Service:</strong> We're not just a restaurant; we're a family. We treat every customer like a guest in our home.</li>
        </ul>
      </div>
    </div>
  );
};

export default AboutPage;
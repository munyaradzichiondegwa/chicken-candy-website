import React from 'react';
import PageHero from '../components/PageHero';

const AboutPage = () => {
  return (
    <>
      <PageHero title="About Us" />
      <div className="container">
        <div className="page-container">
          <div className="about-content">
            <h2>Our Story</h2>
            <p>
              Chicken Candy was born from a simple yet powerful idea: to serve delicious, high-quality fast food that brings people together. We started in a small kitchen with a secret family recipe for fried chicken, and a dream to share our passion for food with the community.
            </p>
            <h2>Our Mission</h2>
            <p>
              Our mission is to provide an exceptional dining experience by using only the freshest ingredients, preparing every meal with care, and serving our customers with a smile. We believe that good food shouldn't be complicated, it should just be good.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutPage;
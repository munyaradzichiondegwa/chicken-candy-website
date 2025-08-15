import React from 'react';
// Assuming your hero image is in the specified path
import heroBackground from '../assets/images/hero-background.jpg';

const PageHero = ({ title }) => {
  // Inline styles for the hero section
  const heroStyles = {
    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(${heroBackground})`,
    height: '40vh',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    position: 'relative',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    color: 'white',
    textAlign: 'center',
  };

  const titleStyles = {
    fontSize: '3.5rem',
    fontFamily: "'Pacifico', cursive",
  };

  return (
    <div style={heroStyles}>
      <h1 style={titleStyles}>{title}</h1>
    </div>
  );
};

export default PageHero;
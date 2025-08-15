import React, { useState, useEffect } from 'react';
import twitterIcon from '../assets/images/twitter.png';
import facebookIcon from '../assets/images/facebook.png';
import instagramIcon from '../assets/images/instagram.png';
import youtubeIcon from '../assets/images/youtube.png';
import whatsappIcon from '../assets/images/whatsapp.png';

const Footer = () => {
  // Re-added state and effect to manage live date and time
  const [currentDateTime, setCurrentDateTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setCurrentDateTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <footer className="footer">
      <div className="container footer-content">
        
        {/* Top Row: Contains Brand Name/Slogan and Social Icons (Unchanged) */}
        <div className="footer-main">
          <div className="footer-brand">
            <h3>Chicken Candy</h3>
            <p>"Delightful Delicious, A taste sensation like no other!!!"</p>
          </div>
          <div className="social-icons">
            <a href="#" aria-label="Twitter">
              <img src={twitterIcon} alt="Twitter" className="social-icon" />
            </a>
            <a href="#" aria-label="Facebook">
              <img src={facebookIcon} alt="Facebook" className="social-icon" />
            </a>
            <a href="#" aria-label="Instagram">
              <img src={instagramIcon} alt="Instagram" className="social-icon" />
            </a>
            <a href="#" aria-label="YouTube">
              <img src={youtubeIcon} alt="YouTube" className="social-icon" />
            </a>
            <a
              href="https://wa.me/263774071792"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
            >
              <img src={whatsappIcon} alt="WhatsApp" className="social-icon" />
            </a>
          </div>
        </div>

        {/* Bottom Row: Now includes Date/Time in the center */}
        <div className="footer-secondary">
          <div className="footer-contact">
            <p>
              123 Mbuya Nehanda St, Harare |{' '}
              <a href="tel:+263774071792">Phone: +263 77 407 1792</a>
            </p>
          </div>
          
          {/* ADDED: Live Date and Time in the middle */}
          <div className="footer-datetime">
            <p>{currentDateTime.toLocaleDateString()} - {currentDateTime.toLocaleTimeString()}</p>
          </div>

          <div className="footer-copyright">
            <p>&copy; {new Date().getFullYear()} Chicken Candy. All Rights Reserved.</p>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
import React from 'react';
import './ContactPage.css'; // We will create this file next

const ContactPage = () => {
  return (
    <div className="contact-container">
      <h1>Contact Us</h1>
      <p className="contact-intro">We'd love to hear from you! Whether you have a question about our menu, a suggestion, or just want to say hello, here's how you can reach us.</p>
      
      <div className="contact-grid">
        <div className="contact-details">
          <h3>Our Location</h3>
          <p>123 Mbuya Nehanda St<br />Harare, Zimbabwe</p>

          <h3>Phone Orders</h3>
          <p>+263 77X XXX XXX</p>
          
          <h3>Email Us</h3>
          <p>order@chickencandy.co.zw</p>
        </div>
        <div className="contact-form-container">
          <h3>Send us a Message</h3>
          <form className="contact-form">
            <input type="text" placeholder="Your Name" required />
            <input type="email" placeholder="Your Email" required />
            <textarea rows="6" placeholder="Your Message" required></textarea>
            <button type="submit">Send Message</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
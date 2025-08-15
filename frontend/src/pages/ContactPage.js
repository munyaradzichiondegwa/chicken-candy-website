import React from 'react';
import PageHero from '../components/PageHero';

const ContactPage = () => {
  return (
    <>
      <PageHero title="Contact Us" />
      <div className="container">
        <div className="page-container">
          <p style={{textAlign: 'center', maxWidth: '600px', margin: '2.5rem auto'}}>
            We'd love to hear from you! Whether you have a question about our menu, a suggestion, or just want to say hello, here's how you can reach us.
          </p>
          
          <div className="contact-grid">
            <div className="contact-details">
              <h3>Our Location</h3>
              <p>123 Mbuya Nehanda St<br />Harare, Zimbabwe</p>

              <h3>Phone Orders</h3>
              <p>+263 77 407 1792</p>
              
              <h3>Email Us</h3>
              <p>order@chickencandy.co.zw</p>
            </div>
            <div className="contact-form-container">
              <h3>Send us a Message</h3>
              <form className="contact-form">
                <input type="text" placeholder="Your Name" required />
                <input type="email" placeholder="Your Email" required />
                <textarea rows="6" placeholder="Your Message" required></textarea>
                <button type="submit" className="btn btn-primary">Send Message</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactPage;
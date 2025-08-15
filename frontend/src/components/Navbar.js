import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { CartContext } from '../context/CartContext';
import logo from '../assets/images/logo.png';

const Navbar = () => {
  const navigate = useNavigate();
  const { getCartCount } = useContext(CartContext);
  const cartCount = getCartCount();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  const userInfo = localStorage.getItem('userInfo') 
    ? JSON.parse(localStorage.getItem('userInfo')) 
    : null;

  const logoutHandler = () => {
    localStorage.removeItem('userInfo');
    setIsMenuOpen(false);
    navigate('/');
  };
  
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="navbar">
      <div className="container nav-container">
        <Link to="/" className="nav-logo" onClick={() => setIsMenuOpen(false)}>
          <img src={logo} alt="Chicken Candy Logo" />
        </Link>
        
        <div className={`hamburger ${isMenuOpen ? 'open' : ''}`} onClick={toggleMenu}>
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
        </div>

        <nav className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
          <Link to="/" onClick={toggleMenu}>Home</Link>
          <Link to="/menu" onClick={toggleMenu}>Menu</Link>
          <Link to="/about" onClick={toggleMenu}>About</Link>
          <Link to="/contact" onClick={toggleMenu}>Contact</Link>
          {userInfo && (
             <Link to="/dashboard" onClick={toggleMenu}>Dashboard</Link>
          )}
        </nav>

        <div className="nav-actions">
          <Link to="/cart" className="cart-link">
            Cart
            {cartCount > 0 && <span className="cart-badge">{cartCount}</span>}
          </Link>
          {userInfo ? (
            <div className="user-menu">
              <button onClick={logoutHandler} className="btn btn-primary">Logout</button>
            </div>
          ) : (
            <Link to="/auth" className="btn btn-primary">Login</Link>
          )}
        </div>
      </div>
    </header>
  );
};

export default Navbar;
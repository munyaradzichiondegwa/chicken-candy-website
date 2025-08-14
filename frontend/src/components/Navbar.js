import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const navigate = useNavigate();
  const userInfo = localStorage.getItem('userInfo') 
    ? JSON.parse(localStorage.getItem('userInfo')) 
    : null;

  const logoutHandler = () => {
    localStorage.removeItem('userInfo');
    navigate('/login');
  };

  return (
    <header className="navbar">
      <div className="container nav-container">
        <Link to="/" className="nav-logo">Chicken Candy</Link>
        <nav>
          <Link to="/menu">Menu</Link>
          <Link to="/about">About</Link>     {/* <-- ADD LINK */}
          <Link to="/contact">Contact</Link> {/* <-- ADD LINK */}
          {userInfo ? (
            <>
              <span>Welcome, {userInfo.email}</span>
              <button onClick={logoutHandler}>Logout</button>
            </>
          ) : (
            <>
              <Link to="/login">Login</Link>
              <Link to="/register">Sign Up</Link>
            </>
          )}
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
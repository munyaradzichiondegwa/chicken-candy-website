import React, { useState, useEffect } from 'react';
import axios from 'axios';
import MenuItem from '../components/MenuItem';
import './MenuPage.css';

const MenuPage = () => {
  const [menuItems, setMenuItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchMenu = async () => {
      try {
        setLoading(true);
        const { data } = await axios.get('/api/menu');
        setMenuItems(data);
        setLoading(false);
      } catch (err) {
        setError('Could not fetch menu items. Please try again later.');
        setLoading(false);
      }
    };
    fetchMenu();
  }, []);

  return (
    <div>
      <h1>Our Menu</h1>
      {loading ? (
        <p>Loading...</p>
      ) : error ? (
        <p style={{ color: 'red' }}>{error}</p>
      ) : (
        <div className="menu-grid">
          {menuItems.map((item) => (
            <MenuItem key={item._id} item={item} />
          ))}
        </div>
      )}
    </div>
  );
};

export default MenuPage;
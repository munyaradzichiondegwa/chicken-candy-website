import React, { useState, useEffect } from 'react';
// We no longer need axios for this component since we are mocking the data
// import axios from 'axios'; 
import MenuItem from '../components/MenuItem';
import PageHero from '../components/PageHero';

// 1. Import your specific menu item images
import friedChickenImage from '../assets/images/menu-fried-chicken.jpg';
import chickenWrapImage from '../assets/images/menu-chicken-wrap.jpg';
import russianChipsImage from '../assets/images/menu-russian-chips.jpg';
import quarterChickenImage from '../assets/images/menu-quarter-chicken.jpg';
import comboMealImage from '../assets/images/menu-combo-meal.jpg';
import largeFriesImage from '../assets/images/menu-large-fries.jpg';
import defaultImage from '../assets/images/menu-default.jpg';

// 2. Define the menu data based on your images
// This array simulates the data you would normally get from your API
const mockMenuData = [
  {
    _id: '1',
    name: 'Crispy Fried Chicken',
    description: '2 pieces of our signature crispy and juicy fried chicken.',
    price: 3.50,
    image: friedChickenImage,
  },
  {
    _id: '2',
    name: 'Hearty Chicken Wrap',
    description: 'Grilled chicken, fresh lettuce, and creamy sauce wrapped in a soft tortilla.',
    price: 4.00,
    image: chickenWrapImage,
  },
  {
    _id: '3',
    name: 'Russian & Chips',
    description: 'A classic combo of a savory Russian sausage served with a side of crispy fries.',
    price: 2.50,
    image: russianChipsImage,
  },
  {
    _id: '4',
    name: 'Quarter Chicken Meal',
    description: 'A succulent quarter chicken piece, grilled to perfection, with a side of fries.',
    price: 5.00,
    image: quarterChickenImage,
  },
  {
    _id: '5',
    name: 'Chicken Candy Combo',
    description: 'The ultimate meal: fried chicken, golden fries, fresh salad, and dipping sauce.',
    price: 6.50,
    image: comboMealImage,
  },
  {
    _id: '6',
    name: 'Large Golden Fries',
    description: 'A generous portion of our perfectly salted, crispy golden fries.',
    price: 2.00,
    image: largeFriesImage,
  },
];


const MenuPage = () => {
  const [menuItems, setMenuItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchMenu = () => {
      try {
        // 3. Instead of an API call, we use our mock data
        setLoading(true);
        // Simulate a network delay
        setTimeout(() => {
          // Add a fallback image to each item, just in case
          const itemsWithFallbackImage = mockMenuData.map(item => ({
            ...item,
            image: item.image || defaultImage
          }));
          setMenuItems(itemsWithFallbackImage);
          setLoading(false);
        }, 500); // 0.5 second delay
      } catch (err) {
        setError('Could not load menu items. Please try again later.');
        setLoading(false);
      }
    };

    fetchMenu();
  }, []);

  return (
    <>
      <PageHero title="Our Menu" />
      <div className="container" style={{ paddingTop: '2rem', paddingBottom: '2rem' }}>
        {loading ? (
          <p style={{ textAlign: 'center' }}>Loading Menu...</p>
        ) : error ? (
          <p style={{ color: 'red', textAlign: 'center' }}>{error}</p>
        ) : (
          <div className="menu-grid">
            {menuItems.map((item) => (
              <MenuItem key={item._id} item={item} />
            ))}
          </div>
        )}
      </div>
    </>
  );
};

export default MenuPage;
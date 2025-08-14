import React from 'react';
import './MenuItem.css';

const MenuItem = ({ item }) => {
  const addToCartHandler = () => {
    // In a full app, this would dispatch to a global state (Context API or Redux)
    alert(`Added ${item.name} to cart!`);
  };

  return (
    <div className="menu-item-card">
      <img src={item.image} alt={item.name} />
      <div className="card-body">
        <h3>{item.name}</h3>
        <p className="price">${item.price.toFixed(2)}</p>
        <button onClick={addToCartHandler}>Add to Cart</button>
      </div>
    </div>
  );
};

export default MenuItem;
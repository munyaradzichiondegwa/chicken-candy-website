import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';

const MenuItem = ({ item }) => {
  const { addToCart } = useContext(CartContext);
  const placeholderImage = 'https://via.placeholder.com/400x300.png?text=Food+Image';

  return (
    <div className="menu-item-card">
      <img src={item.image || placeholderImage} alt={item.name} />
      <div className="card-body">
        <h3>{item.name}</h3>
        <p className="description">{item.description}</p>
        <div className="card-footer-details">
          <p className="price">${item.price.toFixed(2)}</p>
          <button onClick={() => addToCart(item)} className="btn btn-secondary">Add to Cart</button>
        </div>
      </div>
    </div>
  );
};

export default MenuItem;
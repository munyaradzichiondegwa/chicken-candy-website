import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import { Link, useNavigate } from 'react-router-dom';
import '../assets/css/CartPage.css';

const CartPage = () => {
  const { cartItems, addToCart, removeFromCart, getCartTotal, clearCart } = useContext(CartContext);
  const navigate = useNavigate();

  const handleCheckout = () => {
    // In a real app, this would redirect to a payment page.
    // We will just clear the cart and navigate home.
    alert('Thank you for your order! Proceeding to checkout.');
    clearCart();
    navigate('/');
  };

  return (
    <div className="cart-page">
      <h1>Your Shopping Cart</h1>
      {cartItems.length === 0 ? (
        <div className="cart-empty">
          <p>Your cart is empty.</p>
          <Link to="/menu" className="btn btn-primary">Go to Menu</Link>
        </div>
      ) : (
        <div className="cart-container">
          <div className="cart-items">
            {cartItems.map(item => (
              <div key={item._id} className="cart-item">
                <img src={item.image || 'https://via.placeholder.com/150'} alt={item.name} />
                <div className="item-details">
                  <h2>{item.name}</h2>
                  <p className="item-price">${item.price.toFixed(2)}</p>
                </div>
                <div className="item-quantity">
                  <button onClick={() => removeFromCart(item._id)}>-</button>
                  <span>{item.qty}</span>
                  <button onClick={() => addToCart(item)}>+</button>
                </div>
                <div className="item-total">
                  ${(item.price * item.qty).toFixed(2)}
                </div>
              </div>
            ))}
          </div>
          <div className="cart-summary">
            <h2>Order Summary</h2>
            <div className="summary-total">
              <span>Total</span>
              <span>${getCartTotal().toFixed(2)}</span>
            </div>
            <button onClick={handleCheckout} className="btn btn-primary checkout-btn">
              Proceed to Checkout
            </button>
            <button onClick={clearCart} className="btn-clear-cart">
              Clear Cart
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default CartPage;
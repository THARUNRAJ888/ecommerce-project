import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/Cart.css';

export default function CartPage() {
  const [cartItems, setCartItems] = useState(() => {
    const saved = localStorage.getItem('cart');
    if (!saved) return [];
    return JSON.parse(saved).map(item =>
      item.quantity ? item : { ...item, quantity: 1 }
    );
  });

  const navigate = useNavigate();

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cartItems));
  }, [cartItems]);

  const handleQuantityChange = (id, delta) => {
    setCartItems(prev =>
      prev.map(item =>
        item._id === id
          ? { ...item, quantity: Math.max((item.quantity || 1) + delta, 1) }
          : item
      )
    );
  };

  const handleRemove = id => {
    setCartItems(prev => prev.filter(item => item._id !== id));
  };

  const handlePayment = () => {
  if (!localStorage.getItem('token')) {
    navigate('/signup', { state: { redirectTo: '/cart' } });
  } else {
    navigate('/payment', { state: { products: cartItems } });
  }
};


  const handleContinueShopping = () => {
    navigate('/');
  };

  const subtotal = cartItems.reduce(
    (sum, item) => sum + item.price * (item.quantity || 1),
    0
  );

  return (
    <div className="cart-container">
      <h2>Shopping Cart</h2>
      {cartItems.length === 0 ? (
        <div className="empty-cart-box">
          <h3>Your cart is empty</h3>
          <button className="continue-btn" onClick={handleContinueShopping}>
            Continue Shopping
          </button>
        </div>
      ) : (
        <div className="cart-flex">
          <div className="cart-items-list">
            {cartItems.map(item => (
              <div key={item._id} className="cart-card">
                <img
                  src={item.imageUrl || 'https://via.placeholder.com/90'}
                  alt={item.name}
                  className="cart-image"
                />
                <div className="cart-item-info">
                  <h3>{item.name}</h3>
                  <div className="category">{item.category}</div>
                  <div className="price-row">
                    <span className="current-price">₹{item.price}</span>
                    {item.originalPrice && (
                      <span className="original-price">₹{item.originalPrice}</span>
                    )}
                  </div>
                  <div className="qty-controls">
                    <button
                      className="qty-btn"
                      onClick={() => handleQuantityChange(item._id, -1)}
                    >-</button>
                    <span className="qty-value">{item.quantity || 1}</span>
                    <button
                      className="qty-btn"
                      onClick={() => handleQuantityChange(item._id, 1)}
                    >+</button>
                    <span className="item-subtotal">
                      Subtotal: ₹{(item.price * (item.quantity || 1)).toFixed(2)}
                    </span>
                  </div>
                </div>
                <button
                  onClick={() => handleRemove(item._id)}
                  className="cart-remove"
                  title="Remove from cart"
                >
                  &#128465;
                </button>
              </div>
            ))}
          </div>
          <div className="cart-summary">
            <h3>Order Summary</h3>
            <div>
              <div className="summary-row">
                <span>Subtotal</span>
                <span>₹{subtotal.toFixed(2)}</span>
              </div>
              <div className="summary-row">
                <span>Shipping</span>
                <span className="free-shipping">FREE</span>
              </div>
              <div className="summary-row total">
                <span>Total</span>
                <span>₹{subtotal.toFixed(2)}</span>
              </div>
            </div>
            <button className="checkout-btn" onClick={handlePayment}>
              Proceed to payment
            </button>
            <button className="continue-btn" onClick={handleContinueShopping}>
              Continue Shopping
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

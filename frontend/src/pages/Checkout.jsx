import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import '../styles/Checkout.css';

export default function CheckoutPage() {
  const navigate = useNavigate();
  const location = useLocation();
  const product = location.state?.product;
  const [quantity, setQuantity] = useState(1);

  if (!product) {
    return (
      <div className="checkout-container">
        <h2>Checkout</h2>
        <p>No product selected for checkout.</p>
        <button className="continue-btn" onClick={() => navigate('/')}>
          Continue Shopping
        </button>
      </div>
    );
  }
  const subtotal = (Number(product.price) || 0) * quantity;

  const handlePayment = () => {
    if (!localStorage.getItem('token')) {
     
      navigate('/signup', {
        state: { redirectTo: '/checkout', payload: { product, quantity } },
      });
    } else {
   
      navigate('/payment', { state: { product: { ...product, quantity } } });
    }
  };

  return (
    <div className="checkout-container">
      <center>
        <h2>Checkout page!</h2>
      </center>

      <div className="checkout-grid">
        
        <div className="checkout-product-card">
          <img
            src={product.imageUrl || 'https://via.placeholder.com/110'}
            alt={product.name}
            className="checkout-image"
          />
          <div className="checkout-product-info">
            <h3>{product.name}</h3>
            <div className="checkout-category">{product.category}</div>
            <div className="checkout-price">₹{Number(product.price).toFixed(2)}</div>
            <div className="checkout-qty-controls">
              <button onClick={() => setQuantity((q) => Math.max(q - 1, 1))}>-</button>
              <span>{quantity}</span>
              <button onClick={() => setQuantity((q) => q + 1)}>+</button>
            </div>
          </div>
        </div>

        <div className="checkout-summary">
          <h3>Order Summary</h3>
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
          <button className="checkout-btn" onClick={handlePayment}>
            Proceed to payment
          </button>
          <button className="continue-btn" onClick={() => navigate('/')}>
            Continue Shopping
          </button>
        </div>
      </div>
    </div>
  );
}

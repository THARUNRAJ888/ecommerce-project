import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';
import '../styles/Payment.css';

export default function PaymentPage() {
  const location = useLocation();
  const navigate = useNavigate();
  const { product, products } = location.state || {};

  const [isProcessing, setIsProcessing] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);

  const [cardNumber, setCardNumber] = useState('');
  const [expiryDate, setExpiryDate] = useState('');
  const [cvv, setCvv] = useState('');
  const [cardholderName, setCardholderName] = useState('');
  const [billingAddress, setBillingAddress] = useState('');

  const handleProcess = (e) => {
    e.preventDefault();
    setShowConfirm(true);
  };

  const handleConfirm = async (confirmed) => {
    setShowConfirm(false);
    if (!confirmed) return;

    setIsProcessing(true);
    const token = localStorage.getItem('token');
    if (!token) {
      navigate('/signup');
      return;
    }
    try {
      let orderProducts, totalAmount;
      if (products) {
        orderProducts = products.map(p => ({
          product: p._id || p.id,
          quantity: p.quantity || 1,
          name: p.name,
          imageUrl: p.imageUrl,
          price: p.price
        }));
        totalAmount = products.reduce((sum, p) => sum + p.price * (p.quantity || 1), 0);
      } else if (product) {
        orderProducts = [{
          product: product._id || product.id,
          quantity: product.quantity || 1,
          name: product.name,
          imageUrl: product.imageUrl,
          price: product.price
        }];
        totalAmount = (product.price || 0) * (product.quantity || 1);
      }

      localStorage.setItem('lastOrder', JSON.stringify({ products: orderProducts, totalAmount }));

      await axios.post('/api/v1/orders',
        { 
          products: orderProducts, 
          totalAmount, 
          payment: {
            cardNumber,
            expiryDate,
            cvv,
            cardholderName,
            billingAddress
          }
        },
        { headers: { Authorization: `Bearer ${token}` } }
      );
      alert('Payment successful!');
      navigate('/orders');
    } catch (error) {
      alert('Payment failed! ' + (error.response?.data?.message || error.message));
    } finally {
      setIsProcessing(false);
    }
  };

  return (
    <div className="payment-page">
      <div className="payment-card">
        <h2>Payment Page</h2>
        <form className="payment-form" onSubmit={handleProcess}>
          <div className="payment-row">
            <label htmlFor="cardNumber">Card Number:</label>
            <input
              id="cardNumber"
              type="text"
              placeholder="1234 5678 9012 3456"
              value={cardNumber}
              onChange={(e) => setCardNumber(e.target.value)}
              required
            />
          </div>
          <div className="payment-row">
            <label htmlFor="expiryDate">Expiry Date:</label>
            <input
              id="expiryDate"
              type="text"
              placeholder="MM/YY"
              value={expiryDate}
              onChange={(e) => setExpiryDate(e.target.value)}
              required
            />
          </div>
          <div className="payment-row">
            <label htmlFor="cvv">CVV Number:</label>
            <input
              id="cvv"
              type="password"
              placeholder="CVV"
              value={cvv}
              onChange={(e) => setCvv(e.target.value)}
              required
            />
          </div>
          <div className="payment-row">
            <label htmlFor="cardholderName">Cardholder Name:</label>
            <input
              id="cardholderName"
              type="text"
              placeholder="John Doe"
              value={cardholderName}
              onChange={(e) => setCardholderName(e.target.value)}
              required
            />
          </div>
          <div className="payment-row">
            <label htmlFor="billingAddress">Billing Address:</label>
            <input
              id="billingAddress"
              type="text"
              placeholder="Billing Address"
              value={billingAddress}
              onChange={(e) => setBillingAddress(e.target.value)}
              required
            />
          </div>
          <button
            type="submit"
            disabled={isProcessing}
            className="process-btn"
          >
            {isProcessing ? "Processing..." : "Process"}
          </button>
        </form>

        {showConfirm && (
          <div className="popup-overlay">
            <div className="popup">
              <p>Do you want to proceed with payment?</p>
              <div className="popup-actions">
                <button className="btn-confirm" onClick={() => handleConfirm(true)}>Yes</button>
                <button className="btn-cancel" onClick={() => handleConfirm(false)}>No</button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

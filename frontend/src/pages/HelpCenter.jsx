import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/Help.css';

const HelpCenter = () => {
  const navigate = useNavigate();

  const handleContactClick = () => {
    navigate('/contact');
  };

  return (
    <div className="help-center">
      <div className="help-center-container">
        <div className="help-header">
          <h1>Help Center</h1>
          <p>We’re here to make your experience smoother and faster.</p>
        </div>

        <div className="faq-section">
          <div className="faq-item">
            <h3>How do I track my order?</h3>
            <p>
              You can track your order from your account dashboard under “My Orders”.
              We’ll also send real-time updates to your registered email and phone number.
            </p>
          </div>

          <div className="faq-item">
            <h3>How can I return or exchange an item?</h3>
            <p>
              Visit the “Returns” section in your profile and follow the easy step-by-step
              process. You’ll receive a pickup confirmation within 24 hours.
            </p>
          </div>

          <div className="faq-item">
            <h3>What payment methods do you accept?</h3>
            <p>
              We accept all major debit/credit cards, UPI, Paytm, Google Pay, and net banking.
              Cash on Delivery is also available for select locations.
            </p>
          </div>

          <div className="faq-item">
            <h3>How do I contact customer support?</h3>
            <p>
              Our support team is available 24/7. You can reach us through live chat or by email
              at <strong>support@yourstore.com</strong>.
            </p>
          </div>
        </div>

        <div className="contact-section">
          <h2>Need More Help?</h2>
          <p>
            We’re always happy to assist you. Reach out to our friendly support team anytime.
          </p>
          <button className="contact-button" onClick={handleContactClick}>
            Contact Support
          </button>
        </div>
      </div>
    </div>
  );
};

export default HelpCenter;

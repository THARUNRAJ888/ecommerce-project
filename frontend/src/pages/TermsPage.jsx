import React from 'react';
import '../styles/Terms.css';

export default function TermsPage() {
  return (
    <div className="terms-page">
      <div className="terms-hero">
        <h1 className="terms-title">Terms of Service</h1>
        <p className="terms-updated">Last updated: {new Date().toLocaleDateString()}</p>
      </div>

      <div className="terms-card">
        <h3>Agreement</h3>
        <p>By using this site, you agree to these terms and all applicable policies.</p>

        <h3>Accounts</h3>
        <p>Ensure account details are accurate. You are responsible for maintaining account security.</p>

        <h3>Purchases</h3>
        <p>All purchases are subject to availability, pricing, and payment verification.</p>

        <h3>Returns</h3>
        <p>Returns and refunds follow our Returns Policy outlined in the Help Center.</p>

        <h3>Limitation of liability</h3>
        <p>To the maximum extent permitted by law, liability is limited for indirect or incidental damages.</p>

        <h3>Contact</h3>
        <p>Email: legal@get-roost.example</p>
      </div>
    </div>
  );
}

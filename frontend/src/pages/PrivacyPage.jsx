import React from 'react';
import '../styles/Privacy.css';

export default function PrivacyPage() {
  return (
    <div className="privacy-page">
      <div className="privacy-hero">
        <h1 className="privacy-title">Privacy Policy</h1>
        <p className="privacy-updated">Last updated: {new Date().toLocaleDateString()}</p>
      </div>

      <div className="privacy-card">
        <h3>Information we collect</h3>
        <p>We collect account details, order history, and usage information to provide and improve services.</p>

        <h3>How we use information?</h3>
        <p>To process orders, personalize content, communicate updates, and ensure security and fraud prevention.</p>

        <h3>Sharing</h3>
        <p>We do not sell personal data. We share with trusted processors as necessary to fulfill services.</p>

        <h3>Your rights</h3>
        <p>Access, rectify, or delete your data by contacting support, subject to legal obligations.</p>

        <h3>Contact</h3>
        <p>Email: support@get-roost.example</p>
      </div>
    </div>
  );
}

import React, { useState } from "react";
import "../styles/Contact.css";

function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [showThanks, setShowThanks] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const isValid = Object.values(form).every((val) => val.trim().length >= 3);
    if (!isValid) {
      window.alert("All fields must have at least 3 characters!");
      return;
    }
    window.alert("Message sent successfully!");
    setShowThanks(true);
    setForm({ name: "", email: "", subject: "", message: "" });
  };

  const handleThanksClose = () => setShowThanks(false);

  return (
    <div className="contact-main-bg">
      <div className="contact-main-container">
        <div className="contact-form-section">
          <h2 className="contact-title">Contact Us</h2>
          <p className="contact-desc">
            Have questions, feedback, or need assistance? Fill out the form
            below and we'll get back as soon as possible.
          </p>

          <form onSubmit={handleSubmit}>
            <div className="contact-row">
              <div className="contact-col">
                <label>Your Name *</label>
                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  required
                  placeholder="Enter your name"
                />
              </div>
              <div className="contact-col">
                <label>Email Address *</label>
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  required
                  placeholder="Enter your email"
                />
              </div>
            </div>

            <div>
              <label>Subject *</label>
              <input
                type="text"
                name="subject"
                value={form.subject}
                onChange={handleChange}
                required
                placeholder="Subject"
              />
            </div>

            <div className="message-row">
              <label htmlFor="message" className="message-label">
                Your Message *
              </label>
              <textarea
                id="message"
                name="message"
                className="message-box"
                rows="8"
                value={form.message}
                onChange={handleChange}
                required
                placeholder="Type your message"
              ></textarea>
            </div>

            <button className="contact-btn" type="submit">
              Send Message
            </button>
          </form>
        </div>

        <div className="contact-info-section">
          <div className="info-card">
            <h3>Contact Information</h3>
            <div className="info-item">
              <span className="info-label">Email:</span>
              <span className="info-value">support@getroost.com</span>
            </div>
            <div className="info-item">
              <span className="info-label">Address:</span>
              <span className="info-value">
                9/29 bazaar Street, Salem, Tamilnadu, India
              </span>
            </div>
            <div className="info-item">
              <span className="info-label">Phone:</span>
              <span className="info-value">+91 7845199229</span>
            </div>
            <div className="info-item">
              <span className="info-label">Business Hours:</span>
              <span className="info-value">Mon-Sat: 9 AM – 6 PM</span>
            </div>

            <div className="info-divider"></div>
            <div className="info-content">
              <p>
                <b>Customer Service:</b> Queries answered within 24 hours.
              </p>
              <p>
                <b>Bulk Orders:</b> Email for partnership and corporate
                requests.
              </p>
              <p>
                <b>Returns & Refunds:</b> Fast support via mail and phone.
              </p>
              <p>
                <b>Social:</b> Follow on Facebook, Instagram, and X for deals.
              </p>
              <p>
                <b>Visit Us:</b> Walk-in customers welcome during business
                hours.
              </p>
            </div>
          </div>
        </div>

        {showThanks && (
          <div className="thanks-overlay" onClick={handleThanksClose}>
            <div className="thanks-modal slide-in">Thanks for reach out sir</div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Contact;

import React from "react";
import { useNavigate } from 'react-router-dom';
import "../styles/About.css";

const features = [
  {
    iconClass: "wide-selection",
    icon: "🗂️",
    title: "Wide Selection",
    desc: "Thousands of products across multiple categories",
  },
  {
    iconClass: "quality-assured",
    icon: "🎖️",
    title: "Quality Assured",
    desc: "All products verified for quality and authenticity",
  },
  {
    iconClass: "customer-first",
    icon: "👤",
    title: "Customer First",
    desc: "24/7 support for all your shopping needs",
  },
  {
    iconClass: "great-deals",
    icon: "❤️",
    title: "Great Deals",
    desc: "Regular offers and discounts on top brands",
  },
  {
    iconClass: "fast-shipping",
    icon: "🚚",
    title: "Fast Shipping",
    desc: "Quick and reliable delivery to your doorstep",
  },
  {
    iconClass: "secure-payments",
    icon: "💳",
    title: "Secure Payments",
    desc: "Multiple safe payment options for worry-free shopping",
  },
  {
    iconClass: "easy-returns",
    icon: "🔁",
    title: "Easy Returns",
    desc: "Hassle-free return and refund process for peace of mind",
  },
  {
    iconClass: "eco-friendly",
    icon: "🌿",
    title: "Eco-Friendly Packaging",
    desc: "Committed to sustainable and recyclable packaging materials",
  },
];

function About() {

  const navigate = useNavigate();

  const handleGetStarted = () => {
    navigate("/");
  }; 

  return (
    <div>

      
      <div className="about-container">
        <h1 className="about-title">About Get-roost</h1>
        <p className="about-desc">
          Your one-stop destination for quality products at unbeatable prices. We're committed to making online shopping easy, secure, and enjoyable.
        </p>
        <div className="features-row">
          {features.map((feature, idx) => (
            <div className="feature-card" key={idx}>
              <div className={`feature-icon ${feature.iconClass}`}>
                <span role="img" aria-label={feature.title}>{feature.icon}</span>
              </div>
              <h2 className="feature-title">{feature.title}</h2>
              <p className="feature-desc">{feature.desc}</p>
            </div>
          ))}
        </div>
      </div>


      <div className="story-container">
        <center><h2 className="story-title">Our Story</h2></center>
        
        <p className="story-desc">
          Founded in 2025, Get-roost started with a simple mission: to make quality products accessible to everyone.
          We believe that shopping should be convenient, affordable, and trustworthy.
          Today, we serve thousands of happy customers across the country, offering everything from electronics and fashion to health products and home accessories.
          Our team works tirelessly to ensure every purchase exceeds your expectations.
          We're more than just an e-commerce platform. We're a community of shoppers and sellers who believe in quality, transparency, and exceptional customer service.<br /><br />
          
        </p>
      </div>


      <div className="community-container">
      <h2 className="community-title">Join Our Shopping Community</h2>
      <p className="community-desc">
        Sign up today and get exclusive access to special deals and offers
      </p>
      <button className="community-btn" onClick={handleGetStarted}>
        Get Started
      </button>
    </div>
    </div>
  );
}

export default About;


import React from "react";
import "../styles/Instagrambtn.css";

export default function Instagrambtn() {
  return (
    <div className="instagram-section">
      <a
        href="https://www.instagram.com/santhi_tex_?igsh=MWZ2ejB1Z2ttaHA0Ng=="
        target="_blank"
        rel="noopener noreferrer"
        className="instagram-btn"
        aria-label="Join our Instagram "
      >
        <svg
          className="ig-icon"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          width="20"
          height="20"
          aria-hidden="true"
        >
          <path
            fill="currentColor"
            d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5zm5 5a5 5 0 1 0 0 10 5 5 0 0 0 0-10zm6-.75a1 1 0 1 0 0 2 1 1 0 0 0 0-2z"
          />
        </svg>
        <span className="ig-text">Join Our Instagram Page and enjoy ready-made sarees</span>
      </a>
    </div>
  );
}

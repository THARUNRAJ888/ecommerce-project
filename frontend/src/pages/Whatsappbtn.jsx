import React from "react";
import "../styles/Whatsappbtn.css";

export default function Whatsappbtn() {
  return (
    <div className="whatsapp-section">
      <a
        href="https://chat.whatsapp.com/JdPuKLCS3oZ37l2lTzwsNg" 
        target="_blank"
        rel="noopener noreferrer"
        className="whatsapp-btn"
        aria-label="Chat with us on WhatsApp"
      >
        <svg
          className="wa-icon"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          width="20"
          height="20"
          aria-hidden="true"
        >
          <path
            fill="currentColor"
            d="M20.52 3.48A11.85 11.85 0 0 0 12 0C5.37 0 0 5.37 0 12a11.95 11.95 0 0 0 1.94 6.03L0 24l6.2-2a12 12 0 0 0 5.8 1.56c6.63 0 12-5.37 12-12a11.85 11.85 0 0 0-3.48-8.06Zm-8.22 16.14a9.44 9.44 0 0 1-4.77-1.36l-.34-.2-3.41 1.1 1.15-3.32-.22-.35a9.43 9.43 0 1 1 7.59 4.72Zm5.38-7.19c-.3-.15-1.78-.88-2.06-.98-.28-.1-.48-.15-.68.15s-.78.98-.95 1.18c-.17.2-.36.22-.66.07a8.3 8.3 0 0 1-2.44-1.5 9.24 9.24 0 0 1-1.72-2.14c-.18-.31 0-.48.13-.63.14-.15.3-.35.45-.53a.5.5 0 0 0 .07-.44c-.07-.15-.66-1.58-.9-2.17-.23-.57-.46-.49-.68-.5-.17-.01-.37-.01-.57-.01s-.55.08-.83.4a3.5 3.5 0 0 0-1.3 3.22c.06.22.9 2.85 2.18 4.24 1.5 1.63 2.77 2.1 3.35 2.33.53.2.84.17 1.15-.1.35-.33 1.38-1.62 1.57-2.02.2-.43.2-.8.14-.88Z"
          />
        </svg>
        <span className="wa-text">Chat with Us on WhatsApp for exclusive saree deals</span>
      </a>
    </div>
  );
}

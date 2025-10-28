import React from "react";
import { useNavigate } from "react-router-dom";
import "./SizeGuide.css";

export default function SizeGuideButton() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/size-guide");
  };

  return (
    <div className="size-guide-container">
      <button
        className="size-guide-btn"
        onClick={handleClick}
      >
        Size Guide
      </button>
    </div>
  );
}

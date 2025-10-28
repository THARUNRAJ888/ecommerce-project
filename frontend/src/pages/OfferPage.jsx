import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Offer.css";

export default function BigBillionCountdown() {
  const navigate = useNavigate();
  const [timeLeft, setTimeLeft] = useState({
    days: "00",
    hours: "00",
    minutes: "00",
    seconds: "00",
  });

  useEffect(() => {
    const targetDate = new Date("2025-10-20T00:00:00");

    const timer = setInterval(() => {
      const now = new Date();
      const difference = targetDate - now;

      if (difference <= 0) {
        clearInterval(timer);
        setTimeLeft({ days: "00", hours: "00", minutes: "00", seconds: "00" });
        navigate("/categories?category=fashion", { replace: true });
        return;
      }

      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor(
        (difference % (1000 * 60 * 60)) / (1000 * 60)
      );
      const seconds = Math.floor((difference % (1000 * 60)) / 1000);

      setTimeLeft({
        days: String(days).padStart(2, "0"),
        hours: String(hours).padStart(2, "0"),
        minutes: String(minutes).padStart(2, "0"),
        seconds: String(seconds).padStart(2, "0"),
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [navigate]);

  return (
    <div className="bigbillion-container">
      <h2 className="newyear">Let's hurry up!</h2>
      <h2 className="wait">Your wait is over Jolly-o-jimrahae</h2>

      <div className="section">
        <p>Big Billion Day Offer</p>

        <div className="counter">
          <div className="box">
            <h1>{timeLeft.days}</h1>
            <small>days</small>
          </div>
          <div className="box">
            <h1>{timeLeft.hours}</h1>
            <small>hours</small>
          </div>
          <div className="box">
            <h1>{timeLeft.minutes}</h1>
            <small>minutes</small>
          </div>
          <div className="box">
            <h1>{timeLeft.seconds}</h1>
            <small>seconds</small>
          </div>
        </div>
      </div>
    </div>
  );
}

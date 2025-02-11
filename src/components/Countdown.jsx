import React, { useState, useEffect } from "react";
import "../styles/Hero.css";

const Countdown = ({ targetDate }) => {
  const [timeLeft, setTimeLeft] = useState(targetDate - new Date().getTime());

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date().getTime();
      const remainingTime = targetDate - now;
      if (remainingTime <= 0) {
        clearInterval(interval);
        setTimeLeft(0);
      } else {
        setTimeLeft(remainingTime);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [targetDate]);

  const formatTime = (milliseconds) => {
    const seconds = Math.floor((milliseconds / 1000) % 60);
    const minutes = Math.floor((milliseconds / 1000 / 60) % 60);
    const hours = Math.floor((milliseconds / 1000 / 60 / 60) % 24);
    const days = Math.floor(milliseconds / (1000 * 60 * 60 * 24));

    return { days, hours, minutes, seconds };
  };

  const { days, hours, minutes, seconds } = formatTime(timeLeft);

  return (
    <div className="countdown-container">
      <div className="countdown-box">
        <span className="time-value">{days}</span>
        <span className="time-label">Days</span>
      </div>
      <div className="countdown-box">
        <span className="time-value">{hours}</span>
        <span className="time-label">Hrs</span>
      </div>
      <div className="countdown-box">
        <span className="time-value">{minutes}</span>
        <span className="time-label">Min</span>
      </div>
      <div className="countdown-box">
        <span className="time-value">{seconds}</span>
        <span className="time-label">Sec</span>
      </div>
    </div>
  );
};

export default Countdown;

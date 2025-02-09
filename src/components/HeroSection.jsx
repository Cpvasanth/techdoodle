import React, { useState, useEffect } from "react";
import "../styles/Hero.css";
import srecLogo from "../assets/images/logo.png";

const Countdown = () => {
    const targetDate = new Date(new Date().getFullYear(), 2, 28).getTime(); // March 28
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
  

export default function HeroSection() {
  return (
    <div className="hero-container">
      <img src={srecLogo} alt="hero" className="hero-image" />
      <h2>
        TechDoodle 2k25 <br /> Department of CSE <br /> SREC
      </h2>
      <div>
        <Countdown />
      </div>
      <a
        href="https://docs.google.com/forms/d/e/1FAIpQLSfqHlE1kh-Xv_bmfmPWgovlrS8js0jTqJvQHc7ZbCG2lEUp3A/viewform?pli=1"
        className="register-btn"
      >
        Register <span>&#8599;</span>
      </a>
    </div>
  );
}

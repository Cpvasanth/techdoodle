import React from "react";
import Countdown from "./Countdown";
import "../styles/Hero.css";
import srecLogo from "../assets/images/logo.png";
import pdf from "../assets/TECHDOODLE_2K25.pdf";

export default function HeroSection() {
  const techDoodleTarget = new Date(new Date().getFullYear(), 2, 28).getTime(); // March 28

  return (
    <div className="hero-container">
      <img src={srecLogo} alt="hero" className="hero-image" />
      <h2>
        TechDoodle 2k25 <br /> Department of CSE <br /> SREC
      </h2>
      
      {/* Countdown for TechDoodle Event */}
      <div className="p-4 text-center bg-gray-200 rounded-lg shadow-lg">
        <Countdown targetDate={techDoodleTarget} />
      </div>



      <a
        href="https://docs.google.com/forms/d/e/1FAIpQLSfqHlE1kh-Xv_bmfmPWgovlrS8js0jTqJvQHc7ZbCG2lEUp3A/viewform?pli=1"
        className="register-btn"
        target="_blank"
      >
        Register <span>&#8599;</span>
      </a>

<a href={pdf} download="file.pdf" className="rules-btn">
  Download SYMPOSIUM RULES AND GUIDELINES <span>&#x2B73;</span>
</a>

    </div>
  );
}

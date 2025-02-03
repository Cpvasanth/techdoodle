import React from "react";
import "../styles/Hero.css";
import srecLogo from "../assets/images/logo.png";

export default function HeroSection() {
    return (
        <div className="hero-container">
            <img src={srecLogo} alt="hero" className="hero-image"  />
            <h2> TechDoodle 2k25 <br/> Department of CSE <br/> SREC </h2>
            <a href="https://docs.google.com/forms/d/e/1FAIpQLSfqHlE1kh-Xv_bmfmPWgovlrS8js0jTqJvQHc7ZbCG2lEUp3A/viewform?pli=1" className="register-btn">Register <span>&#8599;</span></a>
        </div>
    )
}
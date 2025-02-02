import React from "react";
import "../styles/Hero.css";
import srecLogo from "../assets/images/logo.png";

export default function HeroSection() {
    return (
        <div className="hero-container">
            <img src={srecLogo} alt="hero" className="hero-image"  />
            <h2> TechDoodle 2k25 <br/> Department of CSE <br/> SREC </h2>
            <a href="www.google.com" className="register-btn">Register <span>&#8599;</span></a>
        </div>
    )
}
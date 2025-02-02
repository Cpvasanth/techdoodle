import React from "react";
import "../styles/nav.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram , faLinkedin, faFacebook } from '@fortawesome/free-brands-svg-icons';

export default function Navbar() {

    const handleCopyEmail = () => {
        const email = "techdoodle2025@gmail.com";
        navigator.clipboard.writeText(email)
          .then(() => alert('Email copied to clipboard!'))
          .catch(err => console.error('Failed to copy email: ', err));
      }
    
      const handleCall = () => {
        const phoneNumber = "tel:+1234567890"; // Replace with the actual phone number
        window.location.href = phoneNumber;
      }

    return(
        <div className="navbar-container">
            {/* desktop view */}

            <div className="navbar-desktop">
            <div className="navbar-email">
                <a href="mailto:techdoodle2025@gmail.com">Techdoodle2025@gmail.com</a>
                <button className="desktop-btn" onClick={handleCopyEmail}>Copy</button>
            </div>
            <button className="navbar-call desktop-btn" onClick={handleCall}>Call</button>
            </div>

            {/* mobile view */}
            
            <div className="navbar-left">
            <a href="mailto:someone@example.com" className="email-btn">
                Email
            </a>

            <a href="tel:+1234567890" className="call-btn">
                Call
            </a>
            </div>

            <div className="navbar-right">

                <a href="https://www.instagram.com/yourprofile" className="social-icon" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faInstagram} size="2x" />
                </a>

                <a href="https://www.linkedin.com/in/yourprofile" className="social-icon" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faLinkedin} size="2x" />
                </a>

                <a href="https://www.facebook.com/yourprofile" className="social-icon" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faFacebook} size="2x" />
                </a>

            </div>

        </div>
    )
}
import React from "react";
import "../styles/nav.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram , faXTwitter, faFacebook } from '@fortawesome/free-brands-svg-icons';

export default function Navbar() {

    const handleCopyEmail = () => {
        const email = "techdoodle2025@gmail.com";
        navigator.clipboard.writeText(email)
          .then(() => alert('Email copied to clipboard!'))
          .catch(err => console.error('Failed to copy email: ', err));
      }
    
      const handleCall = () => {
        const phoneNumber = "tel:+91 8754327976"; 
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
            <a href="mailto:techdoodle2025@gmail.com" className="email-btn">
                Email
            </a>

            <a href="tel:+91 8754327976" className="call-btn">
                Call
            </a>
            </div>

            <div className="navbar-right">

                <a href="https://www.instagram.com/techdoodle2025" className="social-icon" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faInstagram} size="2x" />
                </a>

                <a href="https://www.X.com/techdoodle2025" className="social-icon" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faXTwitter} size="2x" />
                </a>

                <a href="https://www.facebook.com/profile.php?id=61572684644333" className="social-icon" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faFacebook} size="2x" />
                </a>

            </div>

        </div>
    )
}
import React from "react";
import "../styles/footer.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram , faLinkedin, faFacebook } from '@fortawesome/free-brands-svg-icons';

export default function Footer() {
    return (
        <div className="footer">
            <a href="https://www.linkedin.com/in/cpvasanth/"><h2 className="footer-h2">Developed by Vasa&hearts;</h2></a><h2 className="footer-h2"></h2>
            <a href="https://www.instagram.com/" className="social-icon" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faInstagram} size="2x" />
            </a>

            <a href="https://www.linkedin.com/in/" className="social-icon" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faLinkedin} size="2x" />
            </a>

            <a href="https://www.facebook.com/" className="social-icon" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faFacebook} size="2x" />
            </a>

        </div>
    )
}